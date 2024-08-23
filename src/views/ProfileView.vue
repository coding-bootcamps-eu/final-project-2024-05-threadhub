<template>
  <div class="container">
    <HomeViewHeader />
    <ProfileViewHeader />
    <ProfileViewStatus :totalVotes="totalVotes" :totalPosts="totalPosts" />
    <LastPostListContainer :filteredPosts="idFilterPost" />
  </div>
</template>

<script>
import LastPostListContainer from '@/components/ProfileView/LastPostListContainer.vue';
import ProfileViewHeader from '@/components/ProfileView/ProfileViewHeader.vue';
import ProfileViewStatus from '@/components/ProfileView/ProfileViewStatus.vue';
import HomeViewHeader from '@/components/HomeViewHeader.vue';

export default {
  components: { ProfileViewHeader, ProfileViewStatus, LastPostListContainer, HomeViewHeader },
  data() {
    return {
      currentUserId: '',
      posts: [],
      totalVotes: 0,
      totalPosts: 0,
    };
  },
  methods: {
    upVotesCounter() {
      this.totalVotes = this.idFilterPost.reduce((total, post) => total + post.upvotes, 0);
    },

    postsCounter() {
      this.totalPosts = this.idFilterPost.length;
    },
  },
  computed: {
    idFilterPost() {
      return this.posts.filter((post) => post.userId === this.currentUserId);
    },
  },

  async created() {
    this.currentUserId = localStorage.getItem('userId');

    const response = await fetch(import.meta.env.VITE_API_URL + 'posts');
    const data = await response.json();
    // console.log(data);

    this.posts = data;
    this.postsCounter();
    this.upVotesCounter();
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>
