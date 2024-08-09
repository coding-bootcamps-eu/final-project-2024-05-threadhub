<template>
  <div>
    <header><HomeViewHeader /></header>
    <main><PostViewPostContent /></main>
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import PostViewPostContent from '@/components/PostViewPostContent.vue';
export default {
  components: {
    HomeViewHeader,
    PostViewPostContent,
  },
};
</script>
<style></style>
