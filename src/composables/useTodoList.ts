import { ref } from 'vue';

export const useTodoList = (id: number) => {
  const todoList = ref<{ id: number; text: string }[]>([]);
  const ls = localStorage.todoList;
  const editId = -1;
  todoList.value = ls ? JSON.parse(ls) : [];

  const findById = (id: number) => {
    return todoList.value.find((todo) => todo.id === id);
  };

  const findIndexById = (id: number) => {
    return todoList.value.findIndex((todo) => todo.id === id);
  };

  const add = (task: string) => {
    // IDを簡易的にミリ秒で登録する
    const id = new Date().getTime();

    // 配列に入力TODOを追加
    todoList.value.push({ id: id, text: task });

    // localStorageに保存
    localStorage.todoList = JSON.stringify(todoList.value);
  };

  const show = (id: number) => {
    const todo = findById(id);
    editId.value = id;
    return todo?.text;
  };

  return { todoList, add };
};
