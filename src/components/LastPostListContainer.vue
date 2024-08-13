<template>
  <div class="post-list-container">
    <div v-for="post in filteredPosts" :key="post.id" class="post" :id="post.id">
      <div class="title">{{ post.title }}</div>
      <div class="tags-container">
        <div v-for="tag in post.tags" :key="tag" class="tags">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredPosts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.post-list-container {
  padding: 1rem;
  background-color: var(--header-color);
  border-radius: 10px;
  height: 300px;
  overflow-y: auto;
  margin: 2.2rem;
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
</style>
