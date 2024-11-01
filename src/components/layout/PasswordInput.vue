<template>
    <div class="input-field">
      <label :class="{ 'label-floating': isFocused || inputValue }" class="label">{{ label }}</label>
      <div class="input-wrapper" :class="{ 'has-error': errorMessage }">
        <input
          :type="showPassword ? 'text' : 'password'"
          :placeholder="placeholder"
          v-model="inputValue"
          @input="handleInput"
          @focus="onFocus"
          @blur="onBlur"
          class="input"
          id="password"
        />
        <span
          class="iconify icon"
          :data-icon="showPassword ? 'lets-icons:view-fill' : 'lets-icons:view-light'"
          @click="togglePasswordVisibility"
          style="font-size: 24px; cursor: pointer;"
        ></span>
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "PasswordInput",
    props: {
      label: {
        type: String,
        default: "ПАРОЛЬ",
      },
      placeholder: {
        type: String,
        default: "",
      },
      errorMessage: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        inputValue: "",
        isFocused: false,
        showPassword: false,
      };
    },
    methods: {
      handleInput(event) {
        this.$emit("input", event.target.value);
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      onFocus() {
        this.isFocused = true;
        this.$emit("focus");
      },
      onBlur() {
        this.isFocused = false;
        this.$emit("blur");
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
  }
  
  .label {
    font-size: 12px;
    color: #000;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  
  .label-floating {
    font-size: 10px;
    color: #888;
    transform: translateY(-20px);
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
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
  
  .icon {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
  
  .error-message {
    font-size: 12px;
    color: #ff4d4f;
    margin-top: 5px;
  }
  </style>
  