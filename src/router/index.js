import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ProfileView from '@/views/ProfileView.vue';
import PostView from '@/views/PostView.vue';

import { useUserStore } from '@/stores/user';

import MyPostView from '@/views/MyPostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

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
      path: '/post/:postId',
      name: 'postview',
      component: PostView,
      props: true,
    },

    {
      path: '/meine-threads',
      name: 'mypostview',
      component: MyPostView,
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
