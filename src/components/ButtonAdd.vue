<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

// type を使わず直接書く方法
const emit = defineEmits<{ 'on-click': [void] }>();
</script>

<template>
  <!-- // @on-clickにemitを直接書いている -->
  <BaseButton color="blue" @on-click="emit('on-click')">追加</BaseButton>
</template>
