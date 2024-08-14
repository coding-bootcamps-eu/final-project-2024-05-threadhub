<template>
  <div class="post-content-container">
    <div class="scroll-content" v-if="!isEdit" @click="toggleEditing">
      {{ post.text }}
    </div>
    <textarea
      v-if="isEdit"
      v-model="editText"
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
      editText: '',
    };
  },
  watch: {
    isEdit(newVal) {
      if (newVal) {
        this.editTitle = this.post.text;
      }
    },
  },
  methods: {
    emitUpdateTitle() {
      this.$emit('update-text', this.editText);
    },
    toggleEditing() {
      if (this.isEditing) {
        this.$emit('update-text', this.editText);
      }
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
}
</style>
