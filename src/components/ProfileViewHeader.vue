<template>
  <div class="header">
    <section class="cover">
      <div class="container-cover-picture">
        <img class="cover-picture" src="https://picsum.photos/700/700" alt="Titelbild" />
      </div>
      <img class="profile-picture" src="@/assets/images/minion.png" alt="Profilbild" />
    </section>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--background-color);
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
</style>
