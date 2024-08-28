import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserEmail } from '../common/decorator/user-email.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
