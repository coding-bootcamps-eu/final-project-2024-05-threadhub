<template>
  <div class="container">
    <div class="header"><HomeViewHeader /></div>
    <ProfileViewHeader />
    <div class="profil-container">
      <ProfileViewStatus :totalVotes="totalVotes" :totalPosts="totalPosts" />

      <div class="last-post"><LastPostListContainer :filteredPosts="idFilterPost" /></div>
    </div>
  </div>
</template>

<script>
import LastPostListContainer from '@/components/LastPostListContainer.vue';
import ProfileViewHeader from '@/components/ProfileViewHeader.vue';
import ProfileViewStatus from '@/components/ProfileViewStatus.vue';
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
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.profil-container {
  display: contents;
}

.header {
  width: 100%;
}

.last-post {
  display: contents;
}
</style>
