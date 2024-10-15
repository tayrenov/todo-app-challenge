import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Асинхронный экшен для получения данных о задачах с сервера
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
      
      // Проверяем, был ли успешным запрос
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      
      const data = await response.json();
      return data;  // Возвращаем данные для передачи в редьюсер
    } catch (error) {
      // Возвращаем ошибку с использованием rejectWithValue
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронный action для отправки новой задачи на сервер
export const createTodo = createAsyncThunk('todos/createTodo', async (newTodo) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5', newTodo);
  return response.data; // Возвращаем данные задачи из ответа
});

// Экшн для обновления статуса задачи на сервере
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, completed }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }), // Отправляем обновленный статус
    });

    // Проверяем, был ли запрос успешным
    if (!response.ok) {
      throw new Error('Failed to update todo');
    }

    // Возвращаем id и новый статус
    return { id, completed };
  }
);

// Экшн для удаления задачи на сервере
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    // Проверяем, был ли запрос успешным
    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }

    // Возвращаем id задачи для удаления из состояния
    return id;
  }
);

