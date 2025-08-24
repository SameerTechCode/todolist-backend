import { User } from '../users/user.entity';
export declare class Todo {
    id: number;
    title: string;
    completed: boolean;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
