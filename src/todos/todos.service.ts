
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private repo: Repository<Todo>) {}

  create(user: User, title: string) {
    const todo = this.repo.create({ title, user });
    return this.repo.save(todo);
  }

  findAll(userId: number) {
    return this.repo.find({ where: { user: { id: userId } }, order: { createdAt: 'DESC' } });
  }

  async update(userId: number, id: number, attrs: Partial<Todo>) {
    const todo = await this.repo.findOne({ where: { id, user: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    Object.assign(todo, attrs);
    return this.repo.save(todo);
  }

  async remove(userId: number, id: number) {
    const todo = await this.repo.findOne({ where: { id, user: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    await this.repo.remove(todo);
    return { success: true };
  }
}
