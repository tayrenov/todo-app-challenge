import { useDispatch } from "react-redux";
import { useState } from "react";
import { createTodo } from "../../redux/actions/todoActions";
import './AddTodo.css';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
        const newTodo = {
            userId: 1,
            title: title,
            completed: completed,
        };
        dispatch(createTodo(newTodo)); // Отправляем задачу на сервер
        setTitle(''); // Очищаем поле ввода
        setCompleted(false); // Сбрасываем чекбокс
        }
    };

    return (
        <div>
            {/* Форма для добавления новой задачи */}
            <form onSubmit={handleSubmit} className="add-todo">
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo title"
                required
                />
                <label className="app_custom-checkbox">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    <div className={completed ? 'app__custom-checkbox__fake-checkbox checked' : 'app__custom-checkbox__fake-checkbox'}>
                        <div className="app__custom-checkbox__fake-checkbox_circle"></div>
                    </div>
                </label>

                <button type="submit">Add Todo</button>
            </form>
        </div>
        

    )
}

export default AddTodo