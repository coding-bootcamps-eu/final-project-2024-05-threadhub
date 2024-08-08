<template>
  <div id="home">
    <header><HomeViewHeader /></header>
    <div class="filter">
      <ProfileViewFilter @updateFilter="updateSelectedFilter" />
    </div>
    <PostListContainer :posts="posts" :selectedFilter="selectedFilter" />
    <footer><FooterComponent /></footer>
  </div>
</template>
<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProfileViewFilter from '@/components/ProfileViewFilter.vue';
import PostListContainer from '@/components/PostListContainer.vue';
export default {
  data() {
    return {
      posts: [],
      apiUrl: import.meta.env.VITE_API_URL,
      selectedFilter: 'all',
    };
  },
  methods: {
    updateSelectedFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  components: { ProfileViewFilter, FooterComponent, HomeViewHeader, PostListContainer },
  async created() {
    const response = await fetch(this.apiUrl + 'posts');
    this.posts = await response.json();
    console.log(this.posts);
  },
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
