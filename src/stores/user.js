import { defineStore } from 'pinia';
import router from '@/router/index.js';

export const useUserStore = defineStore('user', {
  state() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || null,
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

      this.user = {
        username: data.username,
        isAdmin: data.isAdmin,
        id: data.id,
        email: data.email,
        upvotes: [],
        downvotes: [],
      };

      console.log(this.user);

      localStorage.setItem('user', JSON.stringify(this.user));

      if (router.currentRoute.value.path === '/login') {
        router.push('/home');
      }
    },

    logout() {
      localStorage.clear();

      this.user = null;

      router.push('/login');
    },

    upvote(postId) {
      this.user.upvotes.push(postId);
    },

    removeUpvote(postId) {
      const index = this.user.upvotes.indexOf(postId);
      this.user.upvotes.splice(index, 1);
    },

    downvote(postId) {
      this.user.downvotes.push(postId);
    },

    removeDownvote(postId) {
      const index = this.user.downvotes.indexOf(postId);
      this.user.downvotes.splice(index, 1);
    },
  },
});
