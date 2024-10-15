import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import loggerMiddleware from './middlewares/loggerMiddleware';  // Подключаем кастомный middleware

const store = configureStore({
  reducer: {
    todos: todoReducer,  // Добавляем редьюсер для задач
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),  // Добавляем кастомное middleware
});

export default store;