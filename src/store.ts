import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {

  },
};

export default new Vuex.Store<RootState>(store);
