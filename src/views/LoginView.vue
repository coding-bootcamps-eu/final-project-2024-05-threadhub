<template>
  <div id="login">
    <header>
      <img src="/src/assets/images/logos.png" width="350px" alt="threadhublogo" />
    </header>
    <div class="login-container"><LoginViewContainer /></div>
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
#login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.login-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
