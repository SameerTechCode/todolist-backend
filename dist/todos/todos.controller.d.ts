import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';
export declare class TodosController {
    private service;
    constructor(service: TodosService);
    getAll(req: any): Promise<import("./todo.entity").Todo[]>;
    create(req: any, dto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
    update(req: any, id: string, dto: UpdateTodoDto): Promise<import("./todo.entity").Todo>;
    remove(req: any, id: string): Promise<{
        success: boolean;
    }>;
}
