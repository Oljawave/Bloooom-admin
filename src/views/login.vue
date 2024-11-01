<template>
    <div class="login-page">
      <div class="login-container">
        <img src="@/assets/img/logo.png" alt="Blooooom Logo" class="logo" />
        <h2 class="login-title">ВОЙДИТЕ В СВОЮ УЧЕТНУЮ ЗАПИСЬ</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label :class="{ active: username || isUsernameFocused, label: true }" for="username">ЛОГИН</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="input"
              @focus="isUsernameFocused = true"
              @blur="isUsernameFocused = false"
            />
            <p v-if="showUsernameError" class="error-message">{{ usernameErrorMessage }}</p>
          </div>
  
          <div class="input-group">
            <label :class="{ active: password || isPasswordFocused, label: true }" for="password">ПАРОЛЬ</label>
            <div class="password-wrapper">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="password"
                    class="input"
                    @focus="isPasswordFocused = true"
                    @blur="isPasswordFocused = false"
                />
                <span
                    class="iconify icon"
                    :data-icon="showPassword ? 'lets-icons:view-fill' : 'lets-icons:view-light'"
                    @click="togglePasswordVisibility"
                    style="font-size: 24px; cursor: pointer;"
                ></span>
                </div>

            <p v-if="showPasswordError" class="error-message">{{ passwordErrorMessage }}</p>
          </div>
  
          <button type="submit" class="login-button">ВОЙТИ</button>
        </form>
        <a href="#" class="forgot-password">Забыли свой пароль?</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: "",
        isUsernameFocused: false,
        isPasswordFocused: false,
        showUsernameError: false,
        showPasswordError: false,
        showPassword: false,
        usernameErrorMessage: "Обязательное поле*",
        passwordErrorMessage: "Обязательное поле*",
      };
    },
    methods: {
      handleSubmit() {
        this.showUsernameError = !this.username;
        this.showPasswordError = !this.password;
  
        if (this.username && this.password) {
          // Сюда код для входа добавлю
          console.log("Logging in with", this.username, this.password);
        }
      },
      togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    }
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "SF Pro", sans-serif;
  }
  
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 366px;
    padding-left: 200px;
    text-align: left;
  }
  
  .logo {
    width: 272px;
    margin-bottom: 100px;
  }
  
  .login-title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  
  .input-group {
    position: relative;
    margin-top: 30px;
    width: 366px;
  }
  
  .label {
    position: absolute;
    left: 0;
    top: 8px;
    font-size: 14px;
    color: #000;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  
  .label.active {
    top: -14px;
    font-size: 12px;
    color: #888;
  }
  
  .input {
    width: 100%;
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 14px;
  }
  
  .input:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
  
  .password-wrapper {
    display: flex;
    align-items: center;
  }
  
  .password-wrapper .icon {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
  
  .login-button {
    width: 100%;
    padding: 10px;
    margin-top: 35px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 14px;
  }
  
  .error-message {
    font-size: 12px;
    color: #ff4d4f;
    margin-top: 5px;
  }
  
  .forgot-password {
    font-size: 12px;
    color: #000;
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  