<template>
  <div id="watch-page">
    <div class="video-placeholder">
      video id:&nbsp;<span>{{ this.$route.query.id }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.video-placeholder {
  width: 100%;
  padding: 25% 0;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  color: #999;
}
.video-placeholder span {
  color: red;
}
</style>