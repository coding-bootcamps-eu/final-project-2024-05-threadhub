<template>
  <div class="login-container">
    <div class="login-username">
      <label for="username">Benutzername:</label>
      <input type="text" id="username" placeholder="" />
    </div>
    <div class="login-password">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="" />
    </div>
    <div class="login">
      <a href="#">Regristrierung</a>
      <button @click="login" disabled>Login</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: left;
  padding: 2rem;
  border-radius: 2rem;
  flex-direction: column;
  margin: 2rem;
  background-color: var(--header-color);
}
.login-username {
  margin-bottom: 2rem;
}

.login-username label {
  color: var(--font-color);
  display: block;
  margin-left: 0.7rem;
  margin-bottom: 0.1rem;
  font-size: 0.8rem;
}
.login-username input {
  width: 100%;
  padding: 0.9rem;

  box-sizing: border-box;
  border-radius: 1rem;
  border: none;
  background-color: var(--background-inputfield);
}

.login-password {
  margin-bottom: 1rem;
}

.login-password label {
  color: var(--font-color);
  display: block;
  margin-left: 0.7rem;
  margin-bottom: 0.1rem;
  font-size: 0.8rem;
}
.login-password input {
  width: 100%;
  padding: 0.9rem;
  box-sizing: border-box;
  border-radius: 1rem;
  border: none;
  background-color: var(--background-inputfield);
}

.login {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.login button {
  padding: 0.5rem 2rem;
  border-radius: 0.7rem;
  border: none;
  cursor: not-allowed;
  background-color: hsl(0, 0%, 85%);
  color: black;
}

.login a {
  font-size: 13px;
  margin-top: 0.5rem;
  text-decoration: none;
  color: var(--font-color);
  margin-left: 0.7rem;
}
</style>
