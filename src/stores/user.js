import { defineStore } from 'pinia';
import router from '@/router/index.js';

export const useUserStore = defineStore('user', {
  state() {
    return {
      user: null,
      api: import.meta.env.VITE_API_URL,
    };
  },

  getters: {
    isLoggedIn() {
      return this.user !== null;
    },
  },

  actions: {
    async getUserInfo() {
      const id = localStorage.getItem('userId');
      console.log(id);
      if (id === null) return;

      const res = await fetch(import.meta.env.VITE_API_URL + 'users/' + id);
      const data = await res.json();

      this.user = data;

      console.log(this.user);

      if (router.currentRoute.value.path === '/login') {
        router.push('/home');
      }
    },

    logout() {
      localStorage.clear();

      this.user = null;

      router.push('/login');
    },
  },
});
