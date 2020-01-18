import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  BeforeInsert,
} from 'typeorm';
import { Role } from './Role.entity';
import * as crypto from 'crypto';
import { Helpers } from 'src/utils/helpers';

@Entity()
export class User {
  constructor(private helpers: Helpers) {}

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

  @BeforeInsert()
  hashPassword() {
    this.password = this.helpers.hashPassword(this.password);
  }

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
