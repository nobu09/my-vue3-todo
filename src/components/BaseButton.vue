<script setup lang="ts">
type Props = {
  color: string;
};
const props = defineProps<Props>();

const aaa = () => {};
</script>

<template>
  <button class="btn" :class="props.color" @click="aaa"><slot /></button>
</template>

<style scoped>
.btn {
  padding: 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}

.blue {
  background-color: #03a9f4;
}
</style>
