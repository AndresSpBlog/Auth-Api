import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from 'typeorm';
import { Base } from './Base';
import { Role } from './Role.entity';

@Entity()
export class Permission extends Base {
  @PrimaryGeneratedColumn('uuid')
  permissionId?: string;

  @Column()
  action: string;

  @Column()
  resource: string;

  @ManyToMany(type => Role, {
    onDelete: 'CASCADE',
  })
  roles?: Role[];
}
