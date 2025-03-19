<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

// type を使わず直接書く方法
const emit = defineEmits<{ 'del-click': [void] }>();
</script>

<template>
  <!-- // @on-clickにemitを直接書いている -->
  <BaseButton color="pink" @add-click="emit('del-click')">削</BaseButton>
</template>
