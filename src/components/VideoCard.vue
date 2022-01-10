<template>
  <div class="video-card" :class="expandClass">
    <div class="video-card-image" @click="navigateToVideo">
      <img :src="video.coverImage" :alt="video.title" />
      <div class="hover">
        <img :src="video.hoverImage" :alt="video.title" />
      </div>
    </div>
    <div class="video-card-details">
      <div v-if="!expand" class="video-card-owner-avatar">
        <img :src="video.ownerImage" :alt="video.ownerName" />
      </div>
      <div class="video-card-stats">
        <div class="video-card-title" @click="navigateToVideo">
          {{ video.title }}
        </div>
        <div class="video-card-owner-name">
          <div v-if="expand" class="video-card-owner-avatar">
            <img :src="video.ownerImage" :alt="video.ownerName" />
          </div>
          <div>
            {{ video.ownerName }}
          </div>
        </div>
        <div class="video-card-stat">
          <div class="video-card-stat-view-count">
            {{ video.viewCount }} views
            <span class="seperator"> &#183; </span>
          </div>
          <div class="video-card-stat-publish-date">
            {{ video.publishDateInMonth }} month ago
          </div>
        </div>
        <div v-if="expand" class="video-card-desc">
          {{ video.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    expand: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    navigateToVideo() {
      this.$router.push(`/watch?id=${this.video.id}`);
    },
  },
  computed: {
    expandClass() {
      return this.expand ? "expand" : "";
    },
  },
};
</script>

<style>
.video-card {
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: #efefef;
  overflow: auto;
  height: auto;
  width: 360px;
  height: 320px;
}

.video-card-image img {
  height: 200px;
  width: 360px;
  object-fit: cover;
  cursor: pointer;
}

.video-card-image .hover {
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  display: none;
}

.video-card-image:hover > .hover {
  display: block;
}

.video-card-image .hover img {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5) inset;
}

.video-card-details {
  padding: 10px;
  display: flex;
}

.video-card-owner-avatar {
  width: 36px;
  height: 36px;
  margin-right: 10px;
  overflow: hidden;
}

.video-card-owner-avatar img {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
}

.video-card-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.video-card-title {
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
}

.video-card-owner-name {
  font-size: 12px;
}

.video-card-stat {
  display: flex;
  gap: 10px;
  font-size: 0.8em;
  color: #ccc;
}

.seperator {
  color: #ccc;
  font-weight: bold;
}

/* Expanded */
.video-card.expand {
  width: 100%;
  height: 200px;
  display: flex;
}

.expand .video-card-owner-name {
  display: flex;
  align-items: center;
}

.expand .video-card-owner-avatar {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  overflow: hidden;
}

.expand .video-card-owner-avatar img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.expand.video-card-stats {
  gap: 10px;
}

.expand .video-card-owner-name {
  order: 2;
}

.expand .video-card-desc {
  font-size: 0.8em;
  order: 3;
}
</style>