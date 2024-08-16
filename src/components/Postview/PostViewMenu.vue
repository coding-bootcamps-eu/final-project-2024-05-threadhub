<template>
  <div class="container-menu">
    <div class="dropdown">
      <button class="dropdown-button">...</button>
      <div class="dropdown-content">
        <p v-if="showEdit" class="edit" @click="toggleEditMode">edit</p>
        <p v-if="showEdit" @click="closeThread">Thread schließen</p>
        <p>Thread melden</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userId: null,
    isEdit: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      sameId: false,
      menuVisible: false,
    };
  },
  methods: {
    closeThread() {
      this.$emit('close-thread');
    },
    toggleEditMode() {
      this.$emit('toggle-editing');
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
  computed: {
    showEdit() {
      const user = localStorage.getItem('userId');
      return this.userId === user;
    },
  },
};
</script>
<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;

  padding-right: 1rem;
  padding-bottom: 1rem;
  margin-top: -2rem;

  font-size: 1rem;
  justify-content: end;
  align-items: end;
}

button {
  background-color: var(--background-color);
  font-size: 2rem;
  border: none;
  cursor: pointer;
  border-radius: 9px;
  color: var(--font-color);
}

.dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  right: 1rem;
  top: 32%;
  z-index: 1;

  width: 10rem;
  gap: 0.75rem;
  padding: 1rem;

  background-color: var(--header-color);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 9px;
}

.dropdown-content p {
  color: var(--font-color);
  padding: 0;
  text-decoration: underline;
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown:hover .dropdown-button {
  color: var(--background-inputfield);
}
</style>
