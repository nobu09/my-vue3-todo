<script setup lang="ts">
import { ref } from 'vue';

const todo = ref('');
const isEdit = ref(false);
const todoList = ref<{ id: number; text: string }[]>([]);
const ls = localStorage.todoList;
let editId = -1;

// ローカルストレージにtodoListが存在していればparseして格納（ローカルストレージにはJSONコードにシリアライズされたデータが入っている）
// なければ空の配列を格納
todoList.value = ls ? JSON.parse(ls) : [];

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

const showTodo = (id: number) => {
  const findTodo = todoList.value.find((todo) => todo.id === id);

  if (findTodo) {
    todo.value = findTodo.text;
    isEdit.value = true;
    editId = id;
  }
};

const editTodo = () => {
  // TODOリストから編集対象のIDに一致するTODOを取得
  const findTodo = todoList.value.find((todo) => todo.id === editId);
  const idx = todoList.value.findIndex((todo) => todo.id === editId);

  if (findTodo) {
    findTodo.text = todo.value;
    todoList.value.splice(idx, 1, findTodo);
    localStorage.todoList = JSON.stringify(todoList.value);

    // 初期値に戻す
    isEdit.value = false;
    editId = -1;
    todo.value = '';
  }
};

const deleteTodo = (id: number) => {};
</script>

<template>
  <div>
    <input type="text" class="todo-input" v-model="todo" placeholder="+ TODOを入力" />
    <button class="btn green" @click="editTodo" v-show="isEdit">変更</button>
    <button class="btn" @click="addTodo" v-show="!isEdit">追加</button>
  </div>

  <div class="box_list">
    <div class="todo_list" v-for="todo in todoList" :key="todo.id">
      <div class="todo">
        <input type="checkbox" class="check" />
        <label>{{ todo.text }}</label>
      </div>

      <div class="btns">
        <button class="btn green" @click="showTodo(todo.id)">編</button>
        <button class="btn pink" @click="deleteTodo(todo.id)">削</button>
      </div>
    </div>
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
