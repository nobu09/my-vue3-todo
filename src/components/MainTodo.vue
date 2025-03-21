<script setup lang="ts">
import { ref } from 'vue';
import { useTodoList } from '@/composables/useTodoList';
import BaseButton from '@/components/BaseButton.vue';
import ButtonAdd from '@/components/ButtonAdd.vue';
import ButtonDel from '@/components/ButtonDel.vue';

const todo = ref<string | undefined>();
const isEdit = ref(false);
const { todoList, add, show, edit, del, check, countFinished, countUnfinished } = useTodoList();

const addTodo = () => {
  if (!todo.value) return;

  // todoListに追加
  add(todo.value);

  // 入力値をクリア
  todo.value = '';
};

const showTodo = (id: number) => {
  todo.value = show(id);

  if (todo.value) {
    isEdit.value = true;
  }
};

const editTodo = () => {
  if (!todo.value) return;

  if (todo.value) {
    edit(todo.value);

    // 初期値に戻す
    isEdit.value = false;
    todo.value = '';
  }
};

const deleteTodo = (id: number) => {
  // 初期値に戻す
  isEdit.value = false;

  del(id);
};

const changeCheck = (id: number) => {
  check(id);
};
</script>

<template>
  <div>
    <input type="text" class="todo-input" v-model="todo" placeholder="+ TODOを入力" />
    <BaseButton color="green" @on-click="editTodo" v-show="isEdit">変更</BaseButton>
    <ButtonAdd @add-click="addTodo" v-show="!isEdit">追加</ButtonAdd>
  </div>

  <div class="box_list">
    <div class="todo_list" v-for="todo in todoList" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        />
        <label>{{ todo.text }}</label>
      </div>

      <div class="btns">
        <BaseButton color="green" @on-click="showTodo(todo.id)">編</BaseButton>
        <ButtonDel @del-click="deleteTodo(todo.id)">削</ButtonDel>
      </div>
    </div>
  </div>

  <div class="finCount">
    <span>完了: {{ countFinished }}</span>
    <br />
    <span>未完了: {{ countUnfinished }}</span>
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

.fin {
  color: #777;
  text-decoration: line-through;
  background-color: #ddd;
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

.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
