import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import { Todo } from './todos/todo.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    // Global config (reads from .env file automatically)
    ConfigModule.forRoot({ isGlobal: true }),

    // TypeORM async config (recommended way)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', '127.0.0.1'),
        port: config.get<number>('DB_PORT', 3306),
        username: config.get<string>('DB_USER', 'root'),
        password: config.get<string>('DB_PASS', ''),
        database: config.get<string>('DB_NAME', 'todo_app'),
        entities: [User, Todo],
        synchronize: true, // ⚠️ sirf dev ke liye rakho, prod me migrations use karo
      }),
    }),

    UsersModule,
    AuthModule,
    TodosModule,
  ],
})
export class AppModule {}
