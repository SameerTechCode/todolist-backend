import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    create(email: string, passwordHash: string): Promise<User>;
}
