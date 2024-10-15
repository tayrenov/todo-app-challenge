// Селектор для получения всех задач
export const selectAllTodos = (state) => state.todos.items;

// Селектор для получения статуса загрузки
export const selectTodoStatus = (state) => state.todos.status;

// Селектор для получения всех задач с сортировкой по статусу
export const selectSortedTodos = (state) => {
    return [...state.todos.items].sort((a, b) => {
      return a.completed - b.completed;  // Сортируем: false (незавершенные) впереди, true (завершенные) сзади
    });
  };