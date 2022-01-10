<template>
  <div class="header">
    <Container class="header-container">
      <div class="actions">
        <!-- on click route to /favouirites -->
        <button class="btn" @click="goToFavourites">Favorites</button>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "./Container.vue";
export default {
  components: { Container },
  methods: {
    goToFavourites() {
      this.$router.push("/favorites/bootcamp");
    },
  },
};
</script>

<style>
.header {
  background-color: #333;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
}

.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}
</style>