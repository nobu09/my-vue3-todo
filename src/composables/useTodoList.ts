import { ref } from 'vue';

export const useTodoList = (id: number) => {
  const todoList = ref<{ id: number; text: string }[]>([]);
  const ls = localStorage.todoList;
  const editId = ref(-1);
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
    return todo?.text; // todo?は取得できればtext、できなければundefinedを返す
  }
  
  const edit = (text: string) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);

    if (todo) {
      todo.text = text;
      todoList.value.splice(idx, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);

      editId.value = -1; // 編集モードを解除、editIdを初期化
    }

  return { todoList, add };
};
