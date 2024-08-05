<script setup lang="ts">
import { ref } from 'vue';

const todo = ref('');
const todoList = ref<{ id: number; text: string }[]>([]);

const addTodo = () => {
  // IDを簡易的にミリ秒で生成
  const id = new Date().getTime();

  // 配列に入力TODOを格納
  todoList.value.push({ id: id, text: todo.value });

  // ローカルストレージにTODOリストをJSONで登録
  localStorage.todoList = JSON.stringify(todoList.value);

  // 入力値をクリア
  todo.value = '';
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
