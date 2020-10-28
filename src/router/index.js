import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
import Theme from "@/views/panel/theme.vue";
import Free from "@/views/panel/free.vue";
import Offset from "@/views/offset.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/theme",
    component: Theme,
  },
  {
    path: "/free",
    component: Free,
  },
  {
    path: "/offset",
    name: "offset",
    component: Offset,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
