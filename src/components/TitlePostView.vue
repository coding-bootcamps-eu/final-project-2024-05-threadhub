<template>
  <div class="thread-title">
    <p>
      <strong>{{ dateFormat }}</strong>
    </p>
    <h2 v-if="!isEdit" @click="toggleEditing">{{ post.title }}</h2>
    <textarea
      v-if="isEdit"
      v-model="editTitle"
      @blur="emitUpdateTitle"
      @keyup.enter="emitUpdateTitle"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      editTitle: '',
    };
  },
  watch: {
    isEdit(newVal) {
      if (newVal) {
        this.editTitle = this.post.title;
      }
    },
  },
  methods: {
    emitUpdateTitle() {
      this.$emit('update-title', this.editTitle);
    },
    toggleEditing() {
      if (this.isEditing) {
        this.$emit('update-title', this.editableTitle);
      }
    },
  },
  computed: {
    dateFormat() {
      const date = new Date(this.post.createdAt);
      return date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
};
</script>

<style>
.thread-title {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
}

.thread-title p {
  margin: 0;
  color: var(--font-color);
}

.thread-title h2 {
  margin-top: 0.15rem;
  font-size: 1.5rem;
  color: var(--font-color);
}
</style>
