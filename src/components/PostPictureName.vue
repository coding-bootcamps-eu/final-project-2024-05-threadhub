<template>
  <div id="pic-name-container">
    <img src="@/assets/images/minion.png" alt="Poriflbild" />
    <div>User/Username</div>
  </div>
</template>

<style scoped>
#pic-name-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--font-color);
  font-size: 1.2rem;
  padding: 0 0 1rem 1rem;
}

img {
  width: 3rem;
  border-radius: 50%;
}
</style>
