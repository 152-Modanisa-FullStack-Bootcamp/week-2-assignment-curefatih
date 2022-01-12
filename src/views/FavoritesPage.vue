<template>
  <div id="favorite-page">
    <div class="page-info">
      <h4>{{ this.$route.params.userId }}<span>'s favorite videos</span></h4>
    </div>

    <div class="video-list" v-if="!error && !loading">
      <video-card
        v-for="video in favoritevideos"
        :video="video"
        expand
        :key="video.id"
      />
    </div>
    <div class="error-message" v-if="error">
      <p>There was an error loading the videos. Please try again later.</p>
    </div>
    <div class="loading-message" v-if="loading">
      <p>Loading videos...</p>
    </div>
  </div>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";
import axios from "axios";

export default {
  components: { VideoCard },
  data() {
    return {
      error: false,
      loading: true,
      videos: [],
    };
  },
  computed: {
    favoritevideos() {
      return this.videos.filter((video) => video.favorite);
    },
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_DATA_ENDPOINT)
      .then((response) => {
        console.log(response);
        this.videos = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
}
.page-info h4 span {
  font-style: italic;
  font-weight: normal;
}
</style>