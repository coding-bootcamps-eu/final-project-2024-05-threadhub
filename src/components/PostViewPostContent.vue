<template>
  <div class="post-content-container">
    <div class="scroll-content">
      {{ post.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-content-container {
  color: var(--font-color);
  font-weight: 600;

  height: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.scroll-content {
  height: 100%;
  overflow: auto;
  word-break: break-all;
}
</style>
