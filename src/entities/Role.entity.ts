import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Base } from './Base';
import { Permission } from './Permission.entity';

@Entity()
export class Role extends Base {
  @PrimaryGeneratedColumn('uuid')
  roleId: string;

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permissions[];
}
