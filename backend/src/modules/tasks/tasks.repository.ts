import { Repository } from 'typeorm';
import { CustomRepository } from '../../decorators/typeorm-ex.decorator';
import { Tasks } from './tasks.entity';

@CustomRepository(Tasks)
export class TasksRepository extends Repository<Tasks> {}
