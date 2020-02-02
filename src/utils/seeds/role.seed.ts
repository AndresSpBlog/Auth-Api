import { Role } from '../../entities/Role.entity';

const today = new Date();

const generateRole = (roleName: string): Role => ({
  name: roleName,
  createdAt: today,
  updatedAt: today,
});

export const RoleSeeds = [
  generateRole('Founder'),
  generateRole('Admin'),
  generateRole('Mod'),
  generateRole('User'),
];
