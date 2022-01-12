<template>
  <div id="favorite-page">
    <div class="page-info">
      <h4>{{ this.$route.params.userId }}<span>'s favorite videos</span></h4>
    </div>

    <div
      class="video-list"
      v-if="
        !this.$store.state.videos.error && !this.$store.state.videos.loading
      "
    >
      <video-card
        v-for="video in favorites"
        :video="video"
        expand
        :key="video.id"
      />
    </div>
    <div class="error-message" v-if="$store.state.videos.error">
      <p>There was an error loading the videos. Please try again later.</p>
    </div>
    <div class="loading-message" v-if="$store.state.videos.loading">
      <p>Loading videos...</p>
    </div>
  </div>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";

export default {
  components: { VideoCard },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
  mounted() {
    console.log(this);
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