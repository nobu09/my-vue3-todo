import { ref, computed } from 'vue';

export const useTodoList = (id: number) => {
  const todoList = ref<{ id: number; text: string; checked: boolean }[]>([]);
  const ls = localStorage.todoList;
  const editId = ref(-1);
  // ローカルストレージにtodoListが存在していればparseして格納（ローカルストレージにはJSONコードにシリアライズされたデータが入っている）
  // なければ空の配列を格納
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
    todoList.value.push({ id: id, text: task, checked: false });

    // localStorageに保存
    localStorage.todoList = JSON.stringify(todoList.value);
  };

  const show = (id: number) => {
    const todo = findById(id);
    editId.value = id;
    return todo?.text; // todo?は取得できればtext、できなければundefinedを返す
  };

  const edit = (text: string) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);

    if (todo) {
      todo.text = text;
      todoList.value.splice(idx, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);

      editId.value = -1; // 編集モードを解除、editIdを初期化
    }
  };

  const del = (id: number) => {
    const todo = findById(id);
    if (todo) {
      const deleteMessage = `「${todo.text}」を削除しますか？`;
      if (!confirm(deleteMessage)) return;

      const deleteIndex = findIndexById(id);
      todoList.value.splice(deleteIndex, 1);
      localStorage.todoList = JSON.stringify(todoList.value);
    }
  };

  const check = (id: number) => {
    const todo = findById(id);
    const index = findIndexById(id);

    if (todo) {
      todo.checked = !todo.checked;
      todoList.value.splice(index, 1, todo);
      localStorage.todoList = JSON.stringify(todoList.value);
    }
  };

  const countFinished = computed(() => {
    console.log('from computed');
    const finishedArray = todoList.value.filter((todo) => todo.checked);
    return finishedArray.length;
  });

  return { todoList, add, show, edit, del, check, countFinished };
};
