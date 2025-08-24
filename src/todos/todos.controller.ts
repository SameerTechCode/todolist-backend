import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private service: TodosService) {}

  @Get()
  getAll(@Req() req: any) {
    return this.service.findAll(req.user.userId);
  }

  @Post()
  create(@Req() req: any, @Body() dto: CreateTodoDto) {
    return this.service.create({ id: req.user.userId } as any, dto.title);
  }

  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.service.update(req.user.userId, parseInt(id, 10), dto);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.service.remove(req.user.userId, parseInt(id, 10));
  }
}
