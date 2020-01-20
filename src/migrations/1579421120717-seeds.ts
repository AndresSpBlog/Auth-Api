import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { PermissionSeeds } from '../utils/seeds/permission.seed';
import { Permission } from '../entities/Permission.entity';
import { Role } from '../entities/Role.entity';
import { RoleSeeds } from '../utils/seeds/role.seed';
import { User } from '../entities/User.entity';
import { UserSeeds } from '../utils/seeds/user.seed';

export class Seeds1579421120717 implements MigrationInterface {
  name = 'seeds1579421120717';
  public async up(queryRunner: QueryRunner): Promise<any> {
    const permissionRepository = getRepository(Permission);
    const roleRepository = getRepository(Role);
    const userRepository = getRepository(User);

    PermissionSeeds.map(
      async permission => await permissionRepository.save(permission),
    );
    RoleSeeds.map(async role => await roleRepository.save(role));
    UserSeeds.map(async user => await userRepository.save(user));

    //console.log(await permissionRepository.find());
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
