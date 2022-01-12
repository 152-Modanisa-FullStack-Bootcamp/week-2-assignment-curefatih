import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    videos: {
      error: false,
      loading: true,
      data: [],
    },
  },
  mutations: {
    setVideos(state, videos) {
      state.videos = {
        error: false,
        loading: false,
        data: videos,
      };
    },
  },
  actions: {
    setVideos({ commit }, videos) {
      commit("setVideos", videos);
    },
  },
  getters: {
    favorites: (state) => state.videos.data.filter((video) => video.favorite),
  },
});

export default store;
