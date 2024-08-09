<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <TitlePostView />
      <PostViewPostContent />
      <CommentSectionPostView />
    </main>
  </div>
</template>

<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue';
import TitlePostView from '@/components/TitlePostView.vue';
import PostViewPostContent from '@/components/PostViewPostContent.vue';
import CommentSectionPostView from '@/components/CommentSectionPostView.vue';
export default {
  components: {
    HomeViewHeader,
    TitlePostView,
    PostViewPostContent,
    CommentSectionPostView,
  },
};
</script>
<style></style>
