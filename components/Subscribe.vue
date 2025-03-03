<template>
    <div class="mc-form">
      <h2>Subscribe</h2>
      <p class="indicates-required"><span class="asterisk">*</span> indicates required</p>
  
      <div>
        <label for="email">Email Address <span class="asterisk">*</span></label>
        <input type="email" v-model="email" id="email" class="border-4 py-3 rounded-lg px-3" required />
      </div>
  
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  
      <button :disabled="loading" @click="subscribe">
        {{ loading ? "Subscribing..." : "Subscribe" }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const MAILCHIMP_URL = "https://loaniq.us15.list-manage.com/subscribe/post-json?u=3f4782f316a92f2fe056c2650&id=25a90ded26&c=?";
  
  const email = ref('');
  const loading = ref(false);
  const successMessage = ref('');
  const errorMessage = ref('');
  
  const subscribe = async () => {
    if (!email.value) {
      errorMessage.value = 'Please enter a valid email address.';
      return;
    }
  
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';
  
    try {
      const response = await axios.get(MAILCHIMP_URL, {
        params: { EMAIL: email.value },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.result === 'success') {
        successMessage.value = 'Subscription successful! Check your email.';
        email.value = '';
      } else {
        errorMessage.value = response.data.msg || 'An error occurred.';
      }
    } catch (error) {
      errorMessage.value = 'Subscription failed. Please try again later.';
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style scoped>
  .mc-form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .error-message {
    color: red;
  }
  
  .success-message {
    color: green;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 12px;
    background: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  