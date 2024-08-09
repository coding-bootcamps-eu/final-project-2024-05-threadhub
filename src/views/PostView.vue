<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <TitlePostView />
      <PostPictureName />
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
import PostPictureName from '@/components/PostPictureName.vue';
export default {
  components: {
    HomeViewHeader,
    TitlePostView,
    PostViewPostContent,
    CommentSectionPostView,
    PostPictureName,
  },
};
</script>
<style></style>
