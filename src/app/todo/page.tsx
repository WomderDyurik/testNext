'use client';

import { useState } from 'react';
import { Todo, TodoStatus } from './types/todo';
import TodoItem from './components/Todoitem';
import styles from './styles/ToDo.module.css';

const TodoList = () => {
  // Состояние для списка задач
    const [todos, setTodos] = useState<Todo[]>([]);
    // Состояние для input
    const [newTodoTitle, setNewTodoTitle] = useState('');

    // Обработчик добавления новой задачи
    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!newTodoTitle.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            title: newTodoTitle.trim(),
            status: TodoStatus.ACTIVE,
            createdAt: new Date()
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setNewTodoTitle('');
    };

    // Обработчик изменения статуса задачи
    const handleStatusChange = (id: number, newStatus: TodoStatus) => {
        setTodos(prevTodos =>
        prevTodos.map(todo =>
            todo.id === id ? { ...todo, status: newStatus } : todo
        )
        );
    };

    // Обработчик удаления задачи
    const handleDelete = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Список задач</h1>
                <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    placeholder="Добавить новую задачу"
                />
                <button type="submit">Добавить</button>
                </form>
            </div>

            <ul className={styles.list}>
                {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                />
                ))}
            </ul>

            <div>
                <p>Всего задач: {todos.length}</p>
                <p>
                Активных задач: {
                    todos.filter(todo => todo.status === TodoStatus.ACTIVE).length
                }
                </p>
            </div>
        </div>
    );
};

export default TodoList;