import { Todo } from '../todos/todo.entity';
export declare class User {
    id: number;
    email: string;
    passwordHash: string;
    createdAt: Date;
    todos: Todo[];
}
