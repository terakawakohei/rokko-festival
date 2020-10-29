import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Loading: false,
    menuSelection: null,
    isEnable: false,
    message: false,
  },
  getters: {
    status: (state) => {
      return state.isEnable;
    },
    message: (state) => {
      return state.message;
    },
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
    setenable(state) {
      state.isEnable = true;
    },
    setdisable(state) {
      state.isEnable = false;
    },
    setMessage(state, message) {
      state.message = message;
    },
  },
  actions: {
    snackOn({ commit }) {
      commit("setenable");
    },
    snackOff({ commit }) {
      commit("setdisable");
    },
    setMessage({ commit }, message) {
      commit("setMessage", message);
    },
  },
  modules: {},
});
