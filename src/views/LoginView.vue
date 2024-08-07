<template>
  <div id="login">
    <header>
      <img src="/src/assets/images/logos.png" width="350px" alt="threadhublogo" />
    </header>
    <div><LoginViewContainer /></div>
  </div>
</template>

<script>
import LoginViewContainer from '@/components/LoginViewContainer.vue';

export default {
  components: {
    LoginViewContainer,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
</style>
