import {Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";
import {Category} from "@/types/category";

@Module({dynamic: true, store, name: "categories"})
export default class Categories extends VuexModule {

    private categories: Category[] = [];

    get getCategories() {
        return this.categories;
    }

    @Mutation
    public addCategory(category: Category) {
        this.categories.push(category);
    }
}
