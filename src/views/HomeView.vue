<template>
  <div id="home">
    <header><HomeViewHeader /></header>
    <div class="filter"><ProfileViewFilter /></div>
    <PostListContainer />
    <footer><FooterComponent /></footer>
  </div>
</template>
<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProfileViewFilter from '@/components/ProfileViewFilter.vue';
import PostListContainer from '@/components/PostListContainer.vue';
export default {
  components: { ProfileViewFilter, FooterComponent, HomeViewHeader, PostListContainer },
};
</script>
<style scoped>
#home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.filter {
  margin-top: 2rem;
}

.post-list-container {
  flex: 1;
  max-height: 70vh;
}
</style>
