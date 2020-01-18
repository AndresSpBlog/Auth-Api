import { Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Base } from './Base';
import { Role } from './Role.entity';

@Entity()
export class Permission extends Base {
  @PrimaryGeneratedColumn('uuid')
  permissionId: string;

  @ManyToMany(type => Role, {
    onDelete: 'CASCADE',
  })
  roles: Role[];
}
