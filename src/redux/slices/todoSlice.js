import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, createTodo, updateTodo, deleteTodo} from '../actions/todoActions';  // Импортируем асинхронный экшен

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload); // Добавляем новую задачу в массив
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // Добавляем задачу в массив после успешного ответа
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const { id, completed } = action.payload;  // Извлекаем id и статус

        const existingTodo = state.items.find((todo) => todo.id === id);

        // Проверка существования задачи
        if (existingTodo) {
          existingTodo.completed = completed;  // Обновляем статус
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const id = action.payload;  // Получаем id задачи для удаления
        state.items = state.items.filter((todo) => todo.id !== id);  // Удаляем задачу из состояния
        console.log(state.items)
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.error.message; // Обработка ошибки
      });
  },
});

export const { addTodo } = todoSlice.actions;  // Экспортируем action
export default todoSlice.reducer;