import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginRegistrationView from '@/views/Login-Registration/loginRegistrationView.vue'
import loginView from '@/views/Login-Registration/loginView.vue'
import registrationView from '@/views/Login-Registration/registrationView.vue'
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/loginregistration',
      name: 'loginregistrationview',
      component: loginRegistrationView
    },
    {
      path:'/login',
      name: 'loginview',
      component: loginView
    },
    {
      path:'/registration',
      name: 'registrationview',
      component: registrationView
    }
  ]
})


export default router;
