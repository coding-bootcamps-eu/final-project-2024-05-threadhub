<template>
  <section>
    <div>
      <div class="search-filter">
        <input
          type="text"
          name="text"
          ref="textInput"
          id="search-filter"
          placeholder="Search..."
        /><label for="search-filter"></label>
        <button @click="openCreatePostContainer">Post</button>
      </div>
      <div class="post-filter">
        <div class="radio-div">
          <input type="radio" name="filter" id="filter-all" value="filter-all" /><label
            for="filter-all"
            >all</label
          >
        </div>
        <div class="radio-div">
          <input type="radio" name="filter" id="filter-likes" value="filter-likes" /><label
            for="filter-likes"
            >most Liked</label
          >
        </div>
        <div class="radio-div">
          <input type="radio" name="filter" id="filter-new" value="filter-new" /><label
            for="filter-new"
            >new</label
          >
        </div>
      </div>
    </div>
    <CreatePostContainer v-if="isContainerVisible" @close="isContainerVisible = false" />
  </section>
</template>
<script>
import CreatePostContainer from './CreatePostContainer.vue';

export default {
  components: {
    CreatePostContainer,
  },
  data() {
    return {
      isContainerVisible: false,
    };
  },
  methods: {
    openCreatePostContainer() {
      this.isContainerVisible = true;
    },
  },

  mounted() {
    this.$refs.textInput.focus();
  },
};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-filter {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
}

.search-filter input {
  width: 14.5rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
  background-color: var(--background-inputfield);
  padding-left: 0.5rem;
  font-size: 1.25rem;
}

.search-filter button {
  width: 6rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;

  background-color: var(--background-inputfield);
}

.post-filter {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.radio-div {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.radio-div input {
  transform: scale(1.25);
}

button:active {
  background-color: var(--background-color);
}
</style>
