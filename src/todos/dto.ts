import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title!: string;
}

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
