import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '@/views/MainTodo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'top', // nameを使う場合は名前が重複しないようにする
      component: MainTodo
    },
    {
      path: '/mainTodo',
      name: 'mainTodo',
      component: MainTodo
    }
  ]
});

export default router;
