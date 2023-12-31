import { Module } from '@nestjs/common';
import { QuestsController } from './quests.controller';
import { QuestsService } from './quests.service';
import { QuestsRepository } from './quests.repository';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([QuestsRepository])],
  controllers: [QuestsController],
  providers: [QuestsService],
})
export class QuestsModule {}
