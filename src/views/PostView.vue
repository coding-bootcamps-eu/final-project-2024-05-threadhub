<template>
  <div>
    <header><HomeViewHeader /></header>
    <main></main>
    <footer><FooterComponent /></footer>
  </div>
</template>
<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    HomeViewHeader,
    FooterComponent,
  },
};
</script>
<style></style>
