import {Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";
import {Entry} from "@/types/entry";

@Module({dynamic: true, store, name: "entries"})
export default class Entries extends VuexModule {

    private entries: Entry[] = [];

    get getEntries() {
        return this.entries;
    }

    @Mutation
    public addEntry(entry: Entry) {
        this.entries.push(entry);
    }
}
