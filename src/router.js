import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import MainLayout from "@/layout-pages/main-layout.vue";

const Homepage = () =>
  import(/* "homepage-page" */ "@/page/homepage/homepage.vue");

const Description = () =>
  import(/* "description-page" */ "@/page/description/description.vue");

const Reservation = () =>
  import(/* "reservation-page" */ "@/page/reservation/reservation.vue");

const Menu = () => import(/* "menu-page" */ "@/page/menu/menu.vue");

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
        {
          path: "/description",
          name: "description",
          component: Description,
        },
        {
          path: "/reservation",
          name: "reservation",
          component: Reservation,
        },
        {
          path: "/menu",
          name: "menu",
          component: Menu,
        },
      ],
    },
  ],
});

export default router;
