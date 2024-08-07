<template>
  <section class="post-list-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Max09922',
          subtitle: 'heute ist wieder Mittwoch',
        },
        {
          id: 2,
          title: 'Torsten099',
          subtitle: 'Super Tag heute!',
        },
        {
          id: 3,
          title: 'Mario78773',
          subtitle: 'Hallo World!',
        },
      ],
    };
  },
};
</script>
<style scoped>
.post-list-container {
  padding: 1.5rem;
  background-color: var(--header-color);
  border-radius: 1.3rem;
}
.post {
  background-color: var(--background-inputfield);
  border: 1px solid #ccc;
  padding: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
</style>
