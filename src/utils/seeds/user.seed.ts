import { Role } from '../../entities/Role.entity';
import { User } from '../../entities/User.entity';
import { Helpers } from '../helpers';

const today = new Date();

const generateFounder = (): User => ({
  helpers: new Helpers(),
  firstname: 'Andrés',
  lastname: 'Tuñón',
  username: 'AndresSp',
  email: 'andrestunonsp@gmail.com',
  password: '  ',
  countryCode: 'PA',
  profileImg: null,
  createdAt: today,
  updatedAt: today,
});

const generateAdminTest = (): User => ({
  helpers: new Helpers(),
  firstname: 'Admin',
  lastname: 'Test',
  username: 'AdminTest',
  email: 'andrestunonsp@gmail.com',
  password: 'admintest',
  countryCode: 'PA',
  profileImg: null,
  createdAt: today,
  updatedAt: today,
});

const generateUserTest = (): User => ({
  helpers: new Helpers(),
  firstname: 'User',
  lastname: 'Test',
  username: 'UserTest',
  email: 'andrestunonsp@gmail.com',
  password: 'usertest',
  countryCode: 'PA',
  profileImg: null,
  createdAt: today,
  updatedAt: today,
});

export const UserSeeds = [
  generateFounder(),
  generateAdminTest(),
  generateUserTest(),
];
