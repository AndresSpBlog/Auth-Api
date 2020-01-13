import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base';

@Entity()
export class Permission extends Base {
  @PrimaryGeneratedColumn('uuid')
  permissionId: string;
}
