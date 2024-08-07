<template>
  <div id="login">
    <header>
      <img src="/src/assets/images/logos.png" width="350px" alt="threadhublogo" />
    </header>
    <div><LoginViewContainer /></div>
    <footer><FooterComponent /></footer>
  </div>
</template>

<script>
import LoginViewContainer from '@/components/LoginViewContainer.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    LoginViewContainer,
    FooterComponent,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
</style>
