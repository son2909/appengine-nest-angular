import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(private readonly repository: TasksRepository) {}

  async findAllTaskByQuestId(quest_id: number): Promise<Tasks[]> {
    return this.repository.find({
      where: {
        quest_id,
      },
    });
  }
}
