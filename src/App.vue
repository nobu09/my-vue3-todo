<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

.main {
  flex: 1;
  padding: 16px;
}
</style>
