<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// routes で設定した :id と同じ名前を指定する
const id = ref(route.params.id);

console.log(`watch外: ${id.value}`);

watch(route, () => {
  id.value = route.params.id;
  console.log(`watch内: ${id.value}`);
});
</script>

<template>
  <h1>blog page</h1>
  <p>blog id = {{ id }}</p>
</template>
