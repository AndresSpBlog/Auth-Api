import { Permission, PermissionType } from '../../entities/Permission.entity';

const today = new Date();

const generatePermision = (
  action: PermissionType,
  resource: string,
): Permission => ({
  name: `${action}:${resource}`,
  action: action,
  resource: resource,
  createdAt: today,
  updatedAt: today,
});

const batchPermissions = (resource: string): Permission[] => {
  return Object.keys(PermissionType).map((type: PermissionType) =>
    generatePermision(type, resource),
  );
};

export const PermissionSeeds = [
  batchPermissions('users'),
  batchPermissions('posts'),
  batchPermissions('sections'),
  batchPermissions('roles'),
  batchPermissions('permissions'),
  batchPermissions('tags'),
  batchPermissions('comments'),
].flat();
