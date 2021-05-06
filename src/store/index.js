import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMusicStatus: {
      id: '',
      status: 0, // 0 暂停 1 播放
      /* else status */
    },
  },
  mutations: {
    SET_CURRENTMUSICID(state, payload) {
      state.currentMusicStatus = {
        ...state.currentMusicStatus,
        ...payload
      }
    }
  },
  actions: {},
  modules: {},
});
