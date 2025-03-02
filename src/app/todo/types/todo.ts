export enum TodoStatus {
    ACTIVE = 'active',
    COMPLETED = 'completed',
    ARCHIVED = 'archived'
}

export interface Todo {
    id: number;
    title: string;
    status: TodoStatus;
    createdAt: Date;
}

export type NewTodo = Omit<Todo, 'id' | 'createdAt'>;