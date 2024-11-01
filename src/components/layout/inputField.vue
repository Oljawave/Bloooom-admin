<template>
    <div class="input-field">
      <label :class="{ 'label-floating': isFocused || inputValue }" class="label">{{ label }}</label>
      <div class="input-wrapper" :class="{ 'has-error': errorMessage }">
        <input
          :type="type"
          :placeholder="placeholder"
          v-model="inputValue"
          @input="handleInput"
          @focus="onFocus"
          @blur="onBlur"
          :class="{'filled': inputValue}"
        />
        <span v-if="inputValue && clearable" class="clear-icon" @click="clearInput">✕</span>
      </div>
      <p v-if="actionPrompt && !inputValue && !errorMessage" class="prompt">{{ actionPrompt }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "InputField",
    props: {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
      actionPrompt: {
        type: String,
        default: "",
      },
      errorMessage: {
        type: String,
        default: "",
      },
      clearable: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        inputValue: "",
        isFocused: false,
      };
    },
    methods: {
      handleInput(event) {
        this.$emit("input", event.target.value);
      },
      clearInput() {
        this.inputValue = "";
        this.$emit("input", "");
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
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .label {
    font-size: 12px;
    text-transform: uppercase;
    color: #333;
    transition: 0.2s ease all;
    position: absolute;
    pointer-events: none;
  }
  
  .label-floating {
    font-size: 10px;
    color: #333;
    transform: translateY(-20px);
  }
  
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .input-wrapper input {
    width: 100%;
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 14px;
  }
  
  .input-wrapper input.filled {
    font-weight: 500;
  }
  
  .input-wrapper.has-error input {
    border-bottom: 1px solid red;
  }
  
  .clear-icon {
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
  
  .prompt {
    font-size: 12px;
    color: #666;
  }
  
  .error-message {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }
  </style>
  