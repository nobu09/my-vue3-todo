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

const todoExample = ref(['example1', 'example2', 'example3']);
</script>

<template>
  <div>
    <input type="text" class="todo-input" v-model="todo" placeholder="+ TODOを入力" />
    <button class="btn" @click="addTodo">追加</button>
  </div>

  <div class="box_list">
    <div class="todo_list">
      <div class="todo">
        <input type="checkbox" class="check" />
        <label>TODO1</label>
      </div>

      <div class="btns">
        <button class="btn green">編</button>
        <button class="btn pink">削</button>
      </div>
    </div>

    <div class="todo_list">
      <div class="todo">
        <input type="checkbox" class="check" />
        <label>TODO2</label>
      </div>

      <div class="btns">
        <button class="btn green">編</button>
        <button class="btn pink">削</button>
      </div>
    </div>
  </div>

  <div v-for="(example, index) in todoExample" :key="index">
    <p>{{ index }}. {{ example }}</p>
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

.btn {
  position: relative;
  padding: 6px 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #03a9f4;
  border: 1px solid #eee;
  border-radius: 6px;
}

.btn:active {
  top: 1px;
}

.box_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
}

.todo_list {
  display: flex;
  gap: 8px;
  align-items: center;
}

.todo {
  width: 250px;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.check {
  margin-right: 12px;
  transform: scale(1.6);
}

.btns {
  display: flex;
  gap: 4px;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
