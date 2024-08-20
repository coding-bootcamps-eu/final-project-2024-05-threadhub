<template>
  <section>
    <div>
      <div class="search-filter">
        <input
          type="text"
          name="text"
          ref="textInput"
          id="search-filter"
          v-model="wordSearch"
          @input="emitSearch"
          placeholder="Search..."
        /><label for="search-filter"></label>
        <button @click="openCreatePostContainer">Post</button>
      </div>
      <form class="post-filter">
        <input
          type="radio"
          name="filter"
          id="filter-all"
          value="filter-all"
          checked
          v-model="selectedFilter"
          @change="emitFilter"
        /><label for="filter-all">all</label>

        <input
          type="radio"
          name="filter"
          id="filter-likes"
          value="filter-likes"
          v-model="selectedFilter"
          @change="emitFilter"
        /><label for="filter-likes">most Liked</label>

        <input
          type="radio"
          name="filter"
          id="filter-new"
          value="filter-new"
          v-model="selectedFilter"
          @change="emitFilter"
        /><label for="filter-new">new</label>
      </form>
    </div>
    <CreatePostContainer
      v-if="isContainerVisible"
      @close="closeCreatePostContainer"
      @postCreated="handelPostCreated"
    />
  </section>
</template>
<script>
import CreatePostContainer from '@/components/HomeView/CreatePostContainer.vue';

export default {
  components: {
    CreatePostContainer,
  },

  data() {
    return {
      wordSearch: '',
      selectedFilter: 'all',
      isContainerVisible: false,
    };
  },
  methods: {
    emitSearch() {
      this.$emit('updateSearch', this.wordSearch);
    },

    emitFilter() {
      this.$emit('updateFilter', this.selectedFilter);
    },
    openCreatePostContainer() {
      this.isContainerVisible = true;
    },
    closeCreatePostContainer() {
      this.isContainerVisible = false;
    },
    handelPostCreated() {
      this.$emit('postCreated');
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

.search-filter button {
  width: 6rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;

  background-color: var(--background-inputfield);
}

.post-filter {
  display: flex;
  padding: 1rem 1rem 0 1rem;
  justify-content: center;
}

form input {
  appearance: none;
  position: absolute;
}

form label {
  background-color: var(--background-inputfield);

  cursor: pointer;

  font-size: 1rem;

  padding: 0.25rem 0.75rem;
}

form label:first-of-type {
  border-radius: 8px 0 0 8px;
}

form label:last-of-type {
  border-radius: 0 8px 8px 0;
}

form input:checked + label {
  background-color: var(--header-color);
}

button:active {
  background-color: var(--background-color);
}
</style>
