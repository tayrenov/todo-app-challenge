import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/actions/todoActions';  // Импортируем асинхронный экшен
import { selectAllTodos, selectTodoStatus } from '../redux/selectors/todoSelectors';  // Импортируем селекторы
import AddTodo from './AddTodo/AddTodo';
import OutputTodos from './OutputTodos/OutputTodos';
import BottomPanel from './BottomPanel/BottomPanel';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const status = useSelector(selectTodoStatus);

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

    // Фильтруем задачи в зависимости от выбранного фильтра
    const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
        return !todo.completed;  // Только незавершенные задачи
    } else if (filter === 'completed') {
        return todo.completed;  // Только завершенные задачи
    }
    return true;  // Все задачи (для фильтра 'all')
    });

    const todosToDisplay = filteredTodos.slice(0, 5);
    const remainingTodosCount = filteredTodos.length - todosToDisplay.length;



    
    return (
    <div>
        <AddTodo />

        <div className='app__output-panel'> 
            <div className='todo-item'>
                {status === 'loading' && <div className='todo-item__title'>Loading...</div>}
            </div>

            {status === 'succeeded' && <OutputTodos className='todo-item__title' todos={todosToDisplay} />}
            
            <div className='todo-item'>
                {status === 'failed' && <div className='todo-item__title'>Error loading data</div>}
            </div>
            
            <BottomPanel 
              todos={todos}
              filter={filter} 
              setFilter={setFilter} 
              remainingTodosCount={remainingTodosCount} 
            />
        </div>
    
  </div>
  );
};

export default TodoApp;