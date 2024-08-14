<template>
  <div class="post-list-container">
    <div class="post" v-for="post of posts" :key="post.id">
      <p class="title">{{ post.title }}</p>
      <div class="tags-container">
        <p class="tags" v-for="tag in post.tags" :key="tag">{{ tag }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      filterMyPost: [],
    };
  },
  async created() {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    const res = await fetch(import.meta.env.VITE_API_URL + 'posts');
    const data = await res.json();
    console.log(data);
    const filterPost = data.filter((post) => post.userId === userId);

    this.posts = filterPost;
  },
};
</script>
<style scoped>
.post-list-container {
  padding: 1.5rem;

  border-radius: 1.3rem;

  overflow-y: auto;
  margin: 1rem;
}

.post {
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: 1;
  gap: 0.25rem;

  background-color: var(--background-inputfield);
  border: 1px solid #ccc;
  padding: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.title {
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 1.25rem;
  margin: 0;
}

.tags-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 0.25rem;
}
.tags {
  font-size: 0.66rem;
  background-color: red;
  padding: 0.15rem 0.35rem;
  border-radius: 10px;
  margin: 0;
}
</style>
