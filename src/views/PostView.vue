<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <PostViewMenu @toggle-editing="toggleEditing" />
      <TitlePostView :post="post" :is-edit="isEdit" @update-title="updateTitle" />
      <PostPictureName :userId="post.userId" />
      <PostViewPostContent :post="post" :is-edit="isEdit" @update-text="updateText" />
      <button v-if="isEdit" @click="savePost">Save Changes</button>
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
import PostViewMenu from '@/components/PostViewMenu.vue';
export default {
  components: {
    HomeViewHeader,
    TitlePostView,
    PostViewPostContent,
    CommentSectionPostView,
    PostPictureName,
    InteraktionPostView,
    PostViewMenu,
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
      isEdit: false,
    };
  },
  methods: {
    toggleEditing() {
      this.isEdit = !this.isEdit;
    },
    updateTitle(newtitle) {
      this.post.title = newtitle;
    },
    updateText(newText) {
      this.post.text = newText;
    },
    async savePost() {
      const response = await fetch(import.meta.env.VITE_API_URL + `posts/${this.postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.post),
      });

      const data = await response.json();
      this.post = data;
      this.isEdit = false;
      this.editField = null;
    },
  },
  async created() {
    const response = await fetch(import.meta.env.VITE_API_URL + `posts/${this.postId}`);
    this.post = await response.json();
    console.log(this.post);
  },
};
</script>
<style></style>
