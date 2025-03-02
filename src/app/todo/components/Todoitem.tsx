import {Todo,TodoStatus } from '@/app/todo/types/todo';
import styles from '@/app/todo/styles/ToDo.module.css'


interface TodoItemProps {
    todo: Todo;
    onStatusChange: (id: number, status: TodoStatus) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onStatusChange, onDelete }: TodoItemProps) => {
// Обработчик изменения статуса
    const handleStatusChange = () => {
        const newStatus = todo.status === TodoStatus.ACTIVE 
        ? TodoStatus.COMPLETED 
        : TodoStatus.ACTIVE;
        onStatusChange(todo.id, newStatus);
    };

// Обработчик удаления
    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <li className={`${styles.item} ${todo.status === TodoStatus.COMPLETED ? styles.completed : ''}`}>
            <span className={styles.title}>{todo.title}</span>
            <button 
                onClick={handleStatusChange}
                className={`${styles.button} ${styles.completeButton}`}
            >
                {todo.status === TodoStatus.ACTIVE ? 'Завершить' : 'Активировать'}
            </button>
            <button 
                onClick={handleDelete}
                className={`${styles.button} ${styles.deleteButton}`}
            >
                Удалить
            </button>
        </li>
    );
};

export default TodoItem;