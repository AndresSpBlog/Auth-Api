import { Permission } from '../../entities/Permission.entity';
import { Helpers } from '../helpers';

const today = new Date();
const helpers = new Helpers();

const generatePermision = (action: string, resource: string): Permission => ({
  name: helpers.permissionBuilder(action, resource),
  action: action,
  resource: resource,
  createdAt: today,
  updatedAt: today,
});

const batchPermissions = (
  resource: string,
  actions: string[],
): Permission[] => {
  return actions.map((type: string) => generatePermision(type, resource));
};

export const PermissionSeeds = [
  batchPermissions('users', ['search', 'list', 'edit', 'delete']),
  batchPermissions('profiles', ['view']), //(GET User)
  batchPermissions('posts', [
    'search',
    'list',
    'create',
    'edit:own',
    'delete:own',
    'delete',
    'comment',
    'report',
  ]),
  //batchPermissions('sections', []), //If you have [action]:post permission, you have access to [action]:sections
  batchPermissions('roles', ['assign', 'create', 'edit', 'delete', 'list']),
  batchPermissions('permissions', [
    'assign',
    'create',
    'edit',
    'delete',
    'list',
  ]),
  //batchPermissions('tags', []), //If you have [action]:post permission, you have access to [action]:tags
  batchPermissions('comments', [
    'list',
    'search',
    'edit:own',
    'delete:own',
    'report',
  ]),
].flat();
