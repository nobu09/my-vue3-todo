<script setup lang="ts">
import { ref } from 'vue';

const todo = ref('');

const addTodo = () => {
  console.log(todo.value);
};
</script>

<template>
  <div>
    <input type="text" class="todo-input" v-model="todo" placeholder="+ TODOを入力" />
    <button class="btn" @click="addTodo">追加</button>
  </div>
</template>

<style scoped>
.todo-input {
  width: 250px;
  padding: 6px 8px;
  margin-right: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.btn:active {
  top: 1px;
}
</style>
