<template>
  <router-view />
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
// import { useUserStore } from './stores/user';

export default {
  components: {
    FooterComponent,
  },
  // created() {
  //   const userStore = useUserStore();
  //   userStore.getUserInfo();
  // },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
