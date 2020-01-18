import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './Role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    nullable: true,
  })
  firstname: string;

  @Column({
    nullable: true,
  })
  lastname: string;

  @Column({
    length: 80,
  })
  username: string;

  @Column()
  email: string;

  @Column({
    length: 60,
  })
  password: string;

  @Column({
    length: 2,
    nullable: true,
  })
  countryCode: string;

  @Column({
    nullable: true,
  })
  profileImg: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(type => Role, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'userRole' })
  roles: Role[];
}
