import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  total_rewards: number;

  @Column()
  number_of_tasks: number;

  @Column()
  preview: boolean;
}
