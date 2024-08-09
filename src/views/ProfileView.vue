<template>
  <div class="container">
    <ProfileViewHeader />
    <ProfileViewStatus />
    <LastPostListContainer :posts="posts" />
  </div>
</template>

<script>
import LastPostListContainer from '@/components/LastPostListContainer.vue';
import ProfileViewHeader from '@/components/ProfileViewHeader.vue';
import ProfileViewStatus from '@/components/ProfileViewStatus.vue';

export default {
  data() {
    return {
      posts: [],
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },

  components: { ProfileViewHeader, ProfileViewStatus, LastPostListContainer },
  async created() {
    const response = await fetch(this.apiUrl + 'posts');
    this.posts = await response.json();
    console.log(this.posts);
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>
