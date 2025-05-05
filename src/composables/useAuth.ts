import { ref } from 'vue';

interface User {
  id: string;
  email: string;
}

const user = ref<User | null>(null);
const isAuthenticated = ref(false);

export function useAuth() {
  const login = async (email: string, password: string) => {
    // ここで実際のAPIリクエストを行う
    // デモ用のダミー実装
    if (email && password) {
      user.value = {
        id: '1',
        email: email
      };
      isAuthenticated.value = true;
      localStorage.setItem('user', JSON.stringify(user.value));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('user');
  };

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
      isAuthenticated.value = true;
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth
  };
} 
