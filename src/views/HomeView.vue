<template>
  <div id="home">
    <header><HomeViewHeader /></header>
    <div class="filter">
      <ProfileViewFilter @updateFilter="updateSelectedFilter" @updateSearch="updateWordSearch" />
    </div>
    <PostListContainer :posts="posts" :selectedFilter="selectedFilter" :wordSearch="wordSearch" />
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import ProfileViewFilter from '@/components/ProfileViewFilter.vue';
import PostListContainer from '@/components/PostListContainer.vue';

export default {
  data() {
    return {
      posts: [],
      apiUrl: import.meta.env.VITE_API_URL,
      selectedFilter: 'all',
      wordSearch: '',
    };
  },
  methods: {
    updateWordSearch(word) {
      this.wordSearch = word;
    },

    updateSelectedFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  components: { ProfileViewFilter, HomeViewHeader, PostListContainer },
  async created() {
    const response = await fetch(this.apiUrl + 'posts');
    this.posts = await response.json();
  },
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
