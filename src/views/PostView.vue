<template>
  <div>
    <header><HomeViewHeader /></header>
    <main>
      <TitlePostView :post="post" :is-edit="isEdit" @update-title="updateTitle" />
      <PostPictureName :userId="post.userId" />
      <PostViewMenu :userId="post.userId" @toggle-editing="toggleEditing" />
      <PostViewPostContent :post="post" :is-edit="isEdit" @update-text="updateText" />
      <div class="save-button"><button v-if="isEdit" @click="savePost">Save Changes</button></div>
      <InteraktionPostView :post="post" :is-edit="isEdit" />
      <CommentSectionPostView :isEdit="isEdit" />
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
      const user = localStorage.getItem('userId');
      if (this.post.userId === user) {
        this.isEdit = !this.isEdit;
      } else {
        this.isEdit = false;
      }
      return;
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
<style scoped>
.save-button {
  display: flex;

  padding: 1rem;
  justify-content: center;
}

button {
  width: 6rem;
  height: 1.75rem;
  font-size: 0.75rem;
  color: var(--font-color);
  border: none;
  border-radius: 10px;
  background-color: var(--header-color);
}

button:hover {
  background-color: var(--background-inputfield);
  color: black;
}
</style>
