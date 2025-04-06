<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

// type を使わず直接書く方法
const emit = defineEmits<{ 'add-click': [void] }>();
</script>

<template>
  <!-- // @on-clickにemitを直接書いている -->
  <BaseButton color="blue" @on-click="emit('add-click')">追加</BaseButton>
</template>
