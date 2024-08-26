<template>
  <div class="post-list-container">
    <div v-for="post in filteredPosts" :key="post.id" class="post" :id="post.id">
      <div class="tags-container">
        <div v-for="tag in post.tags" :key="tag" class="tags">
          {{ tag }}
        </div>
      </div>
      <div class="post-header">
        <div class="title">{{ post.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  props: {
    filteredPosts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showConfirmation: false,
      postIdToDelete: null,
    };
  },
  methods: {
    confirmDelete(postId) {
      this.postIdToDelete = postId;
      this.showConfirmation = true;
    },
    async deletePost() {
      const userStore = useUserStore();

      try {
        await userStore.deletePost(this.postIdToDelete);

        this.$emit('delete-post', this.postIdToDelete);
      } catch (error) {
        alert('Es gab ein problem beim löschen des Thread.');
      } finally {
        this.showConfirmation = false;
        this.postIdToDelete = null;
      }
    },
    cancelDelete() {
      this.showConfirmation = false;
      this.postIdToDelete = null;
    },
  },
};
</script>
<style scoped>
.post-list-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--header-color);
  border-radius: 10px;
  height: 30vh;
  overflow-y: auto;
  margin: 0 1rem;
}

.post {
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: 1;
  gap: 0.5rem;

  background-color: var(--background-inputfield);
  border: 1px solid #ccc;
  padding: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.title {
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tags-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 0.25rem;
}

.tags {
  font-size: 0.75rem;
  background-color: red;
  padding: 0.15rem 0.35rem;
  border-radius: 10px;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  cursor: pointer;
}

.popup-confirm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
}
.confirm-button {
  background-color: #28a745;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
  cursor: pointer;
}
.cancel-button {
  background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
}

.post-header {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
}

@media (min-width: 900px) and (max-width: 1920px) {
  .post-list-container {
    margin: 1rem auto;
    max-width: 70vh;
    height: 45vh;
  }
}
</style>
