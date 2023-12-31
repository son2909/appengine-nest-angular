import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quest_id: number;

  @Column()
  name: string;

  @Column()
  instruction: string;

  @Column()
  reward_type: string;

  @Column()
  reward_amount: number;

  @Column()
  protocol: string;

  @Column()
  protocol_address: string;

  @Column()
  min_amount: number;

  @Column()
  url: string;

  @Column()
  frequency: number;

  @Column()
  dependent_task_id: number;
}
