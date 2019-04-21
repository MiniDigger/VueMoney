<template>
    <div class="entry-list">
        <b-table striped hover borderless responsive selectable
                 :items="entries"
                 :busy="isBusy"
                 :fields="fields"
                 select-mode="single"
                 selectedVariant="success"
                 @row-selected="select">
            <div slot="table-busy" class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>

            <template slot="_type" slot-scope="data">
                {{ data.item.readableType }}
            </template>

            <template slot="row-details" slot-scope="row">
                <b-card>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
                        <b-col>{{ row }}</b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>

        <b-button v-b-modal="'new-entry-modal'">Add..</b-button>
        <NewEntryComponent :id="'new-entry-modal'"></NewEntryComponent>

        <span @click="add">Add</span>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import EntryComponent from "@/components/EntryComponent.vue";
import {getModule} from "vuex-module-decorators";
import Entries from "@/store/modules/entries";
import {Entry, EntryType} from "@/types/entry";
import NewEntryComponent from "@/components/NewEntryComponent.vue";

@Component({
    components: {
        NewEntryComponent,
        EntryComponent,
    },
})
export default class EntryListComponent extends Vue {

    private entryModule = getModule(Entries);

    private lastSelected: Entry | null = null;

    private fields = {
        _title: {
            label: "Title",
            sortable: true,
        },
        _type: {
            label: "Type",
            sortable: false,
        },
        _amount: {
            label: "Amount",
            sortable: true,
        },
    };

    public get entries() {
        return this.entryModule.getEntries;
    }

    get isBusy(): boolean {
        return this.entryModule.getEntries.length == 0;
    }

    public add() {
        const entry = new Entry("---", EntryType.Daily, "Test Title", 20.5);
        this.entryModule.addEntry(entry);
    }

    public select(entries: Entry[]) {
        if (entries.length == 0) {
            if (this.lastSelected != null) {
                this.lastSelected.showDetails = false;
            }
        } else {
            this.lastSelected = entries[0];
            this.lastSelected.showDetails = true;
        }
    }
}
</script>
