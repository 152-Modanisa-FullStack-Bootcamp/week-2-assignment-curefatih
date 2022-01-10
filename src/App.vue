<template>
  <div id="app">
    <Header />
    <Container class="content-wrapper">
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    Container,
  },
};
</script>

<style>
@import "./assets/css/normalize.css";

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.content-wrapper {
  margin: 60px auto;
}
</style>
