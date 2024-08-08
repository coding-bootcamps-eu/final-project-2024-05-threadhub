<template>
  <router-view />
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    FooterComponent,
  },
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
