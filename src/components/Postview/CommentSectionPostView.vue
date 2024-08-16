<template>
  <div v-if="!isEdit" class="click-comment">
    <p @click="showContainBox">Kommentare folgen hier...</p>
  </div>
  <div class="comments" v-show="showComments">
    <div class="on-comment">
      <p>Der folgende Kommentar der zu dem Thema passt.</p>
      <p class="user">username</p>
    </div>
    <div class="on-comment">
      <p>Der folgende Kommentar der zu dem Thema passt.</p>
      <p class="user">username</p>
    </div>
    <div class="on-comment">
      <p>Der folgende Kommentar der zu dem Thema passt.</p>
      <p class="user">username</p>
    </div>
    <div class="on-comment">
      <p>Der folgende Kommentar der zu dem Thema passt.</p>
      <p class="user">username</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      showComments: false,
    };
  },
  methods: {
    showContainBox() {
      this.showComments = !this.showComments;
    },
  },
};
</script>
<style scoped>
.click-comment {
  color: var(--font-color);
  padding-left: 1rem;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 0 1rem;
}

.on-comment {
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  outline: 2px solid var(--header-color);
  border-radius: 8px;
}

.user {
  font-size: 0.75rem;
  text-decoration: underline;
  align-self: end;
  padding-right: 1rem;
}

.on-comment p {
  margin: 0.25rem;
}
</style>
