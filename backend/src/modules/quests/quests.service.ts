import { Injectable } from '@nestjs/common';
import { Quests } from './quests.entity';
import { QuestsRepository } from './quests.repository';
import { LessThan, MoreThan } from 'typeorm';

@Injectable()
export class QuestsService {
  constructor(private readonly repository: QuestsRepository) {}
  async findAllQuestActive(): Promise<Quests[]> {
    const currentTime = new Date();

    return this.repository.find({
      where: {
        start_time: LessThan(currentTime),
        end_time: MoreThan(currentTime),
      },
    });
  }

  async findAllQuestActiveAndTasks(): Promise<any> {
    return this.repository.findAllQuestActiveAndTasks();
  }
}
