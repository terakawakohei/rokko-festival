import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Loading: false,
    menuSelection: null,
  },
  mutations: {
    loadStart(state) {
      state.Loading = true;
    },
    endLoad(state) {
      state.Loading = false;
    },
    changeMenuSelection: function(state, workId) {
      state.menuSelection = workId;
    },
  },
  actions: {},
  modules: {},
});
