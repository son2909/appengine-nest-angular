import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
