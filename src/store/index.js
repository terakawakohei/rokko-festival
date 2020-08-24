import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Loading: false,
  },
  mutations: {
    loadStart(state) {
      state.Loading = true;
    },
    endLoad(state) {
      state.Loading = false;
    },
  },
  actions: {},
  modules: {},
});
