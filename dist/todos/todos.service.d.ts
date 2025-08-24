import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { User } from '../users/user.entity';
export declare class TodosService {
    private repo;
    constructor(repo: Repository<Todo>);
    create(user: User, title: string): Promise<Todo>;
    findAll(userId: number): Promise<Todo[]>;
    update(userId: number, id: number, attrs: Partial<Todo>): Promise<Todo>;
    remove(userId: number, id: number): Promise<{
        success: boolean;
    }>;
}
