<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <TitlePostView :post="post" />
      <PostPictureName :userId="post.userId" />
      <PostViewPostContent :post="post" />
      <InteraktionPostView :post="post" />
      <CommentSectionPostView />
    </main>
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import TitlePostView from '@/components/TitlePostView.vue';
import PostViewPostContent from '@/components/PostViewPostContent.vue';
import CommentSectionPostView from '@/components/CommentSectionPostView.vue';
import PostPictureName from '@/components/PostPictureName.vue';
import InteraktionPostView from '@/components/InteraktionPostView.vue';
export default {
  components: {
    HomeViewHeader,
    TitlePostView,
    PostViewPostContent,
    CommentSectionPostView,
    PostPictureName,
    InteraktionPostView,
  },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const response = await fetch(import.meta.env.VITE_API_URL + `posts/${this.postId}`);
    this.post = await response.json();
    console.log(this.post);
  },
};
</script>
<style></style>
