<template>
  <div id="home">
    <header><HomeViewHeader /></header>
    <div class="filter"><ProfileViewFilter /></div>
    <PostListContainer />
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import ProfileViewFilter from '@/components/ProfileViewFilter.vue';
import PostListContainer from '@/components/PostListContainer.vue';

export default {
  components: { ProfileViewFilter, HomeViewHeader, PostListContainer },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
}

.filter {
  margin-top: 2rem;
}

.post-list-container {
  flex: 1;
  max-height: 70vh;
}
</style>
