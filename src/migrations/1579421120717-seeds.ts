import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { PermissionSeeds } from '../utils/seeds/permission.seed';
import { Permission } from '../entities/Permission.entity';
import { Role } from '../entities/Role.entity';
import { RoleSeeds } from '../utils/seeds/role.seed';
import { User } from '../entities/User.entity';
import { UserSeeds } from '../utils/seeds/user.seed';
import { Helpers } from 'src/utils/helpers';

export class Seeds1579421120717 implements MigrationInterface {
  name = 'seeds1579421120717';
  public async up(queryRunner: QueryRunner): Promise<any> {
    // const helpers = new Helpers();
    // const permissionRepository = getRepository(Permission);
    // const roleRepository = getRepository(Role);
    // const userRepository = getRepository(User);

    // const permissionPromises = PermissionSeeds.map(permission =>
    //   permissionRepository.save(permission),
    // );

    // const rolePromises = RoleSeeds.map(async role => roleRepository.save(role));
    // const userPromises = UserSeeds.map(async user => userRepository.save(user));

    // helpers
    //   .executePromisesSequentially(permissionPromises)
    //   .then(() => helpers.executePromisesSequentially(rolePromises))
    //   .then(() => helpers.executePromisesSequentially(userPromises))
    //   .then(() => this.selectPermissions())
    //   .then(async (permissions: Permission[]) => {
    //     await this.joinPermissionsToRole('Founder', permissions);
    //     return permissions;
    //   })
    //   .then(permissions =>
    //     permissions.filter(
    //       permission =>
    //         (this.removePermissionByName(permission, [
    //           helpers.permissionBuilder('edit', 'users'),
    //           helpers.permissionBuilder('delete', 'users'),
    //         ]) &&
    //           permission.resource !== 'permissions' &&
    //           permission.resource !== 'roles') ||
    //         permission.name === helpers.permissionBuilder('assign', 'roles'),
    //     ),
    //   )
    //   .then(async (permissions: Permission[]) => {
    //     await this.joinPermissionsToRole('Admin', permissions);
    //     return permissions;
    //   })
    //   .then(permissions =>
    //     permissions.filter(permission => permission.resource !== 'roles'),
    //   )
    //   .then(async (permissions: Permission[]) => {
    //     await this.joinPermissionsToRole('Mod', permissions);
    //     return permissions;
    //   })
    //   .then(permissions =>
    //     permissions.filter(
    //       permission =>
    //         permission.name !==
    //           helpers.permissionBuilder('delete', 'comments') &&
    //         permission.name !== helpers.permissionBuilder('delete', 'posts'),
    //     ),
    //   )
    //   .then(async (permissions: Permission[]) => {
    //     await this.joinPermissionsToRole('User', permissions);
    //   })
    //   .then(()=> console.info('Roles assigned successfully'))
    //   .catch(error => console.error(error));
  }

  public async selectPermissions() {
    return await getRepository(Permission).find();
  }

  public async selectOneRoleByRolename(roleName: string) {
    return await getRepository(Role).findOneOrFail({
      where: { name: roleName },
    });
  }

  public async joinPermissionsToRole(
    roleName: string,
    permissionsId: Permission[],
  ) {
    const roleSelected = await this.selectOneRoleByRolename(roleName);
    roleSelected.permissions = permissionsId;
    return getRepository(Role).save(roleSelected);
  }

  public removePermissionByName(
    permission: Permission,
    namesToCheck: string[],
  ): boolean {
    return !namesToCheck.includes(permission.name);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
