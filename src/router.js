import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import MainLayout from "@/layout-pages/main-layout.vue";

const Homepage = () =>
  import(/* "homepage-page" */ "@/page/homepage/homepage.vue");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "index",
          component: Homepage,
        },
      ],
    },
  ],
});

export default router;
