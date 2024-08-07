<template>
  <div class="post-list-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="title">{{ post.title }}</div>
      <div class="tags-container">
        <div v-for="(tag, tagIndex) in post.tags" :key="tagIndex" class="tags">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Flexbox in CSS anwenden?',
          tags: ['CSS', 'Flexbox'],
        },
        {
          id: 2,
          title: 'How do open a Bottle?',
          tags: ['Bottle', 'Open'],
        },
        {
          id: 3,
          title: 'Wie bekomme ich die Inhalte aus einem Array?',
          tags: ['VueJS', 'Array'],
        },
        {
          id: 4,
          title: 'Flexbox in CSS anwenden?',
          tags: ['CSS', 'Flexbox'],
        },
        {
          id: 5,
          title: 'Flexbox in CSS anwenden?',
          tags: ['CSS', 'Flexbox'],
        },
        {
          id: 6,
          title: 'Flexbox in CSS anwenden?',
          tags: ['CSS', 'Flexbox'],
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
}
</style>
