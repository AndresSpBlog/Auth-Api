import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from 'typeorm';
import { Base } from './Base';
import { Role } from './Role.entity';

export enum PermissionType {
  create = 'create',
  read = 'read',
  list = 'list',
  update = 'update',
  delete = 'delete',
}

@Entity()
export class Permission extends Base {
  @PrimaryGeneratedColumn('uuid')
  permissionId?: string;

  @Column({
    type: 'enum',
    enum: PermissionType,
  })
  action: PermissionType;

  @Column()
  resource: string;

  @ManyToMany(type => Role, {
    onDelete: 'CASCADE',
  })
  roles?: Role[];
}
