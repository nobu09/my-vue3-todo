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
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/:pathMatch(.*)*', // 存在しないアドレスにマッチする指定
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/blog/:id',
      name: 'blogId',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: () => import('@/views/BlogDetail.vue')
    }
  ]
});

export default router;
