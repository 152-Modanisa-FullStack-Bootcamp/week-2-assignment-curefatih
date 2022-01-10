import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/views/MainPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";
import WatchPage from "@/views/WatchPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/favorites/:userId",
      component: FavoritesPage,
    },
    {
      path: "/watch",
      component: WatchPage,
    },
  ],
});

export default router;
