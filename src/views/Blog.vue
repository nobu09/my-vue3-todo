<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// routes で設定した :id と同じ名前を指定する
const id = ref(route.params.id);
</script>

<template>
  <h1>blog page</h1>
  <p>blog id = {{ id }}</p>
</template>
