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
        <button>Post</button>
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
  </section>
</template>
<script>
export default {
  mounted() {
    this.$refs.textInput.focus();
  },
};
</script>
<style scoped>
section {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  padding: 18vh;
}

.search-filter {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.search-filter input {
  width: 13.5rem;
  height: 2.25rem;
  border: 1px solid Black;
  border-radius: 10px;
  background-color: var(--background-inputfield);
  padding-left: 0.5rem;
  font-size: 1.25rem;
}

.search-filter button {
  width: 4rem;
  font-size: 1.25rem;

  border-radius: 10px;
  border: 1px solid black;
  background-color: var(--background-inputfield);
}

.post-filter {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
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
