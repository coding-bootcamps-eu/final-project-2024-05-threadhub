<template>
  <header class="homeview-header">
    <h2>ThreadHub</h2>
    <div class="dropdown">
      <button class="dropdown-button">
        <img src="../assets/images/threadhub.png" alt="Logo der ThreadHub App" />
      </button>
      <div class="dropdown-content">
        <a href="/profile">Mein Profil</a>
        <a href="#">Einstellungen</a>
        <a href="#">Ausloggen</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeViewHeader',
};
</script>

<style scoped>
.homeview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  background-color: var(--background-color);
  color: var(--header-color);
}

img {
  height: 2rem;
}

.dropdown-button {
  background-color: var(--background-inputfield);
  border: none;
  cursor: pointer;
  border-radius: 9px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 9px;
}

.dropdown-content a {
  color: var(--header-color);
  padding: 8px 14px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-button {
  background-color: var(--background-inputfield);
}
</style>
