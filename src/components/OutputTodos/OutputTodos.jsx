
import { useDispatch } from 'react-redux';
import './OutputTodos.css';
import { deleteTodo, updateTodo } from '../../redux/actions/todoActions';


const OutputTodos = ({ todos }) => {

    const dispatch = useDispatch();

    const handleStatusChange = (id, completed) => {
        dispatch(updateTodo({ id, completed }));  // Обновляем статус локально
        console.log(todos); // Выводим весь массив todos в консоль
    };
   
    const handleDelete = (id) => {
        dispatch(deleteTodo(id)); // Диспатчим экшен для удаления задачи
        console.log(todos); // Выводим весь массив todos в консоль
    };

    return (
        <>
            {todos.map((todo) => (
            <div key={todo.id} className='todo-item'>
                <label className="app_custom-checkbox">
                    <input type='checkbox' checked={todo.completed} onChange={(e) => {handleStatusChange(todo.id, !todo.completed)}}/>
                    <div className={todo.completed ? 'app__custom-checkbox__fake-checkbox checked' : 'app__custom-checkbox__fake-checkbox'}>
                        <div className="app__custom-checkbox__fake-checkbox_circle"></div>
                    </div>
                </label>
               
                <div className='todo-item__title'>{todo.title}</div> 
                <input className='todo-item__delete-todo' type='submit' value="" onClick={() => handleDelete(todo.id)}/>
            </div>
            ))} 
        </>
    )
}

export default OutputTodos