import { ref } from 'vue';

export const useTodoList = (id: number) => {
  const todoList = ref<{ id: number; text: string }[]>([]);
  const ls = localStorage.todoList;
  todoList.value = ls ? JSON.parse(ls) : [];

  return { todoList };
};
