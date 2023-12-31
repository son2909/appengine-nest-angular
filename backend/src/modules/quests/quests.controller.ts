import { Controller, Get } from '@nestjs/common';
import { Quests } from './quests.entity';
import { QuestsService } from './quests.service';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Get('/active')
  async findAllQuestActive(): Promise<Quests[]> {
    return this.questsService.findAllQuestActive();
  }

  @Get('/active-and-tasks')
  async findAllQuestActiveAndTasks(): Promise<any[]> {
    return this.questsService.findAllQuestActiveAndTasks();
  }
}
