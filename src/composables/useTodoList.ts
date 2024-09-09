import { ref } from 'vue';

export const useTodoList = (id: number) => {
  const todoList = ref<{ id: number; text: string }[]>([]);
  const ls = localStorage.todoList;
  todoList.value = ls ? JSON.parse(ls) : [];

  const add = (task: string) => {
    // IDを簡易的にミリ秒で登録する
    const id = new Date().getTime();

    // 配列に入力TODOを追加
    todoList.value.push({ id: id, text: task });

    // localStorageに保存
    localStorage.todoList = JSON.stringify(todoList.value);
  };

  return { todoList, add };
};
