import Vue from "vue";
import Vuex from "vuex";
import Entries from "@/store/modules/entries";

Vue.use(Vuex);

const store =  new Vuex.Store({
    modules: {
        // entries: Entries,
    },
});
export default store;
