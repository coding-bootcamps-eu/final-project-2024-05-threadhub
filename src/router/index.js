import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ProfileView from '@/views/ProfileView.vue';
import PostView from '@/views/PostView.vue';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/login',
      name: 'loginview',
      component: LoginView,
    },
    {
      path: '/post',
      name: 'postview',
      component: PostView,
    },
  ],
});

router.beforeEach(function (to) {
  const store = useUserStore();
  console.log(store.isLoggedIn);

  if (store.isLoggedIn === false) {
    if (to.path === '/home') {
      return (to.path = '/login');
    }
  } else if (store.isLoggedIn === true) {
    if (to.path === '/login') {
      return (to.path = '/home');
    }
  }
});

export default router;
