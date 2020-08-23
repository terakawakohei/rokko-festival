import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Panel from '../views/panel/index.vue';
import Theme from '../views/panel/theme.vue';
import Free from '../views/panel/free.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/panel',
    name: 'panel',
    component: Panel,
    children: [
      // /user/:id/profileにマッチした時に2階層目のrouter-viewに表示される
      {path: 'free', component: Free},

      // /user/:id の場合に2階層目に表示させたい場合
      {path: '', component: Theme},
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
