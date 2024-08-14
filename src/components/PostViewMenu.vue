<template>
  <div>
    <div class="dropdown">
      <p>...</p>
      <div class="menu">
        <p class="edit" @click="toggleEditMode">edit</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleEditMode() {
      this.$emit('toggle-editing');
    },
  },
};
</script>
<style lang=""></style>
