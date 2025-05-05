<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();
const { login } = useAuth();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  if (!email.value || !password.value) return;
  
  try {
    await login(email.value, password.value);
    router.push('/');
  } catch (error) {
    alert('ログインに失敗しました');
  }
};
</script>

<template>
  <div class="login-container">
    <h1>ログイン</h1>
    <div class="login-form">
      <input
        type="email"
        v-model="email"
        placeholder="メールアドレス"
        class="login-input"
      />
      <input
        type="password"
        v-model="password"
        placeholder="パスワード"
        class="login-input"
      />
      <button @click="handleLogin" class="login-button">ログイン</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.login-button {
  padding: 10px;
  background-color: #03a9f4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0288d1;
}
</style> 
