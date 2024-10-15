
import { useDispatch } from 'react-redux';
import './BottomPanel.css';
import { deleteTodo } from '../../redux/actions/todoActions';


const BottomPanel = ({ todos, filter, setFilter, remainingTodosCount}) => {
    
    const dispatch = useDispatch();

    const handleDeleteAllcompleted = () => {
        console.log('handleDeleteAllcompleted')
        todos.forEach(element => {
            if (element.completed === true) {
                dispatch(deleteTodo(element.id));
            } 
        });
        
        console.log(todos); // Выводим весь массив todos в консоль
        
    };
      

    return (
        <div className='bottom-panel'>
            <div className='bottom-panel__left-items'>{remainingTodosCount} items left</div>
            <div className='bottom-panel__filters'>
                <button className={filter==="all"?'active':''} onClick={() => setFilter('all')}>All</button>
                <button className={filter==="active"?'active':''} onClick={() => setFilter('active')}>Active</button>
                <button className={filter==="completed"?'active':''} onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <div onClick={()=> handleDeleteAllcompleted()}  className='bottom-panel__clear-btn'>Clear completed</div>
        </div>
    )
}

export default BottomPanel