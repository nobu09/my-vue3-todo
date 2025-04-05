<script setup lang="ts">
import { onUnmounted } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

// type を使わず直接書く方法
const emit = defineEmits<{ 'edit-click': [void] }>();

onUnmounted(() => {
  console.log('onUnmounted!!!');
});
</script>

<template>
  <!-- // @on-clickにemitを直接書いている -->
  <BaseButton color="green" @on-click="emit('edit-click')">変更</BaseButton>
</template>
