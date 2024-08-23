<template>
  <div class="container">
    <section class="profile-status-container">
      <div class="profile-status">
        <div>Likes:</div>
        <div>{{ totalVotes }}</div>
      </div>
      <div class="profile-status">
        <div>Threads:</div>
        <div>{{ totalPosts }}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    totalVotes: {
      type: Number,
      required: true,
    },
    totalPosts: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  max-width: 690px;
}

.profile-status-container {
  background-color: var(--header-color);
  height: 4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
}

.profile-status > div {
  color: var(--font-color);
  padding: 0.25rem 0.25rem;
}

.profile-status {
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
}
</style>
