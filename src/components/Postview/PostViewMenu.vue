<template>
  <div class="container-menu">
    <div class="dropdown">
      <button class="dropdown-button" @click="toggleMenu">...</button>
      <div v-if="menuVisible" class="dropdown-content">
        <p v-if="showEdit" class="edit" @click="handleEditClick">edit</p>
        <p v-if="showEdit" @click="closeThread()">Thread schließen</p>
        <p>Thread melden</p>
      </div>
    </div>
    <div v-if="showPopup" class="popup">
      <p>Bearbeitung nicht mehr möglich. Zeit abgelaufen!</p>
      <button @click="closePopup">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: null,
    post: null,
  },
  data() {
    return {
      menuVisible: false,
      showPopup: false,
      postTimestamp: null,
    };
  },

  methods: {
    handleEditClick() {
      const currentTime = Date.now();
      const timeElapsed = (currentTime - this.post.createdAt) / 6000;
      console.log(currentTime);
      console.log(timeElapsed);
      if (timeElapsed > 10) {
        this.showPopup = true;
      } else {
        this.toggleEditMode();
      }
    },

    closeThread() {
      this.$emit('close-thread');
    },

    toggleEditMode() {
      this.$emit('toggle-editing');
    },

    closePopup() {
      this.showPopup = false;
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

.popup {
  position: fixed;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 8px 16px rgb(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  z-index: 1000;
  text-align: center;
}

.popup button {
  margin-top: 0.2rem;
  padding: 0.5rem 1rem;
  background-color: red;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
}
</style>
