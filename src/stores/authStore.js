import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    async login(username, password) {
      // Dummy API URL
      const apiUrl = 'https://your-api-url.com/users';

      try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(user));
          this.router.push({ name: 'home' }); // Weiterleitung zur HomeView
        } else {
          alert('Falscher Benutzername oder Passwort');
        }
      } catch (error) {
        console.error('Fehler bei der Anmeldung:', error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      this.router.push({ name: 'loginview' }); // Weiterleitung zur LoginView
    },
  },
});
