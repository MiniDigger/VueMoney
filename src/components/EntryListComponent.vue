import {EntryType} from "../types/entry";
<template>
    <div class="row entry-list">
        <EntryComponent v-for="entry in getEntries" :entry="entry"/>

        <span @click="add">Add</span>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import EntryComponent from "@/components/EntryComponent.vue";
    import {getModule} from "vuex-module-decorators";
    import Entries from "@/store/modules/entries";
    import {Entry, EntryType} from "@/types/entry";

    @Component({
        components: {
            EntryComponent,
        },
    })
    export default class EntryListComponent extends Vue {

        private entryModule = getModule(Entries);

        public get getEntries() {
            return this.entryModule.getEntries;
        }

        public add() {
            const entry = new Entry("---", EntryType.Daily, "Test Title");
            this.entryModule.addEntry(entry);
        }
    }
</script>
