<script setup lang="ts">
type Props = {
  color: 'blue' | 'green' | 'pink';
};

type Emits = {
  'on-click': [void];
};

const props = defineProps<Props>();
// 親に伝えるための名称を定義(on-click)
const emit = defineEmits<Emits>();

// ボタンクリック時、emitを使って親に通知
const handleClick = () => {
  emit('on-click');
};
</script>

<template>
  <button class="btn" :class="props.color" @click="handleClick"><slot /></button>
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
