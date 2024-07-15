<script setup lang="ts"></script>

<template>
  <div>
    <input type="text" class="todo-input" placeholder="+ TODOを入力" />
    <button class="btn">追加</button>
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
