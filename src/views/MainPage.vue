<template>
  <div id="main-page">
    <div class="video-list" v-if="!error && !loading">
      <video-card
        class="video-wrapper"
        :video="video"
        v-for="video in videos"
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

  mounted() {
    axios
      .get(process.env.VUE_APP_DATA_ENDPOINT)
      .then((response) => {
        console.log(response);
        this.loading = false;
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

<style>
.video-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.video-wrapper {
  margin-bottom: 10px;
}
</style>