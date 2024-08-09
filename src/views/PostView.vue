<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <TitlePostView />
    </main>
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import TitlePostView from '@/components/TitlePostView.vue';
export default {
  components: {
    HomeViewHeader,
    TitlePostView,
  },
};
</script>
<style></style>
