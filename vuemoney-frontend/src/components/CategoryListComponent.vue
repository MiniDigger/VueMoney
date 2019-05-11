<template>
    <b-table striped hover borderless responsive selectable
             :items="categories"
             :busy="isBusy"
             :fields="fields"
             select-mode="single"
             selectedVariant="success"
             @row-selected="select">
        <div slot="table-busy" class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
        </div>

        <template slot="row-details" slot-scope="row">
            <b-card>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>Test:</b></b-col>
                    <b-col>{{ row }}</b-col>
                </b-row>
            </b-card>
        </template>
    </b-table>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {getModule} from "vuex-module-decorators";
    import Categories from "@/store/modules/categories";

    @Component
    export default class CategoryListComponent extends Vue {

        private categoryModule = getModule(Categories);

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

        public get categories() {
            return this.categoryModule.getCategories;
        }

        get isBusy(): boolean {
            return this.categoryModule.getCategories.length == 0;
        }
    }
</script>
