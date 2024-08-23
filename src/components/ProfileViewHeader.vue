<template>
  <div class="header">
    <section class="cover">
      <div class="container-cover-picture">
        <img class="cover-picture" src="https://picsum.photos/700/700" alt="Titelbild" />
      </div>
      <p v-for="user in user" :key="user.id">{{ this.user.username }}</p>
      <img class="profile-picture" src="@/assets/images/minion.png" alt="Profilbild" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      userId: '',
    };
  },

  async created() {
    this.userId = localStorage.getItem('userId');

    const response = await fetch(import.meta.env.VITE_API_URL + 'users/' + this.userId);
    const data = await response.json();

    // console.log(data);
    this.user = data;

    const res = await fetch(import.meta.env.VITE_API_URL + 'posts');
    const dataPost = await res.json();
    // console.log(dataPost);
    this.posts = dataPost;
  },
};
</script>

<style scoped>
.header {
  background-color: var(--background-color);
  max-width: 700px;
}

.cover {
  position: relative;
  height: 20rem;
}

.container-cover-picture {
  height: 60%;
}

.cover-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 15px 15px;
}

.profile-picture {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

p {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 80%;
  font-size: 1.5rem;
  margin-top: 2rem;
}
</style>
