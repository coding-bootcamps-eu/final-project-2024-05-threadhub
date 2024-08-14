<template>
  <div>
    <HomeViewHeader />
    <MyPostViewPostsContainer />
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import MyPostViewPostsContainer from '@/components/MyPostViewPostsContainer.vue';

export default {
  components: {
    HomeViewHeader,
    MyPostViewPostsContainer,
  },
};
</script>

<style></style>
