export const useTodoList = () => {
  const findTodo = todoList.value.find((todo) => todo.id === id);
  const idx = todoList.value.findIndex((todo) => todo.id === id);

  return { findTodo, idx };
};
