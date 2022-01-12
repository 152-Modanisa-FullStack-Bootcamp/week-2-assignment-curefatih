<template>
  <div id="main-page">
    <div class="video-list" v-if="!error && !loading">
      <video-card
        class="video-wrapper"
        :video="video"
        v-for="video in videos.data"
        :key="video.id"
      />
    </div>
    <div class="error-message" v-if="videos.error">
      <p>There was an error loading the videos. Please try again later.</p>
    </div>
    <div class="loading-message" v-if="videos.loading">
      <p>Loading videos...</p>
    </div>
  </div>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";

export default {
  components: { VideoCard },
  computed: {
    videos() {
      return this.$store.state.videos;
    },
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