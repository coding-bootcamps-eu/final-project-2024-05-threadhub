<template>
  <router-link class="router-link" to="/">home</router-link>
  <router-link class="router-link" to="/profile">profile</router-link>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.router-link {
  display: none;
}
</style>
