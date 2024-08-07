<template>
  <div id="home">
    <header><HomeViewHeader /></header>
    <div class="filter"><ProfileViewFilter /></div>
    <div class="post-list-container"><PostListContainer /></div>
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
  min-height: 100vh;
}
.filter {
  flex: 1;
}

.footer {
  flex-shrink: 0;
}

.post-list-container {
  padding: 1rem;
  margin-top: -4rem;
}
</style>
