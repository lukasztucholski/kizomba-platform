import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/views/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Kizomba Info Platform - Homepage',
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router