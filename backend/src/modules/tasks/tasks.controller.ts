import { Controller, Get, Param } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/:quest_id')
  async findAllTaskByQuestId(
    @Param('quest_id') quest_id: number,
  ): Promise<Tasks[]> {
    return this.tasksService.findAllTaskByQuestId(quest_id);
  }
}
