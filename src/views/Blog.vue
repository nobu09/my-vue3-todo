<script setup lang="ts">
import { onMounted, ref } from 'vue';

export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const posts = ref<PostResponse[]>([]);
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);
</script>

<template>
  <h1>blog page</h1>
  <p>blog id = {{ id }}</p>
</template>
