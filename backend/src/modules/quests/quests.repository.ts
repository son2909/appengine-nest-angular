import { Repository } from 'typeorm';
import { Quests } from './quests.entity';
import { CustomRepository } from '../../decorators/typeorm-ex.decorator';

@CustomRepository(Quests)
export class QuestsRepository extends Repository<Quests> {
  findAllQuestActiveAndTasks() {
    const quey = `
    SELECT
      quests.*,
      jsonb_agg(
          jsonb_build_object(
            'id', tasks.id,
            'name', tasks.name,
            'instruction', tasks.instruction,
            'reward_type', tasks.reward_type,
            'reward_amount', tasks.reward_amount,
            'protocol', tasks.protocol,
            'protocol_address', tasks.protocol_address,
            'min_amount', tasks.min_amount,
            'url', tasks.url,
            'frequency', tasks.frequency,
            'dependent_task_id', tasks.dependent_task_id
          )
      ) AS tasks
    FROM
        quests
    LEFT JOIN
        tasks ON quests.id = tasks.quest_id
    WHERE
        NOW() BETWEEN quests.start_time AND quests.end_time
    GROUP BY
        quests.id;
        `;
    return this.query(quey);
  }
}
