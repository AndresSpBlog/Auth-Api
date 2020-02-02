import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Helpers } from 'src/utils/helpers';
const path = require('path');

@Injectable()
export class TypeormconfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const helpers = new Helpers();
    return {
      type: 'postgres',
      host: helpers.checkIfEnvExist(process.env.POSTGRES_HOST),
      port: Number(helpers.checkIfEnvExist(process.env.POSTGRES_PORT)),
      username: helpers.checkIfEnvExist(process.env.POSTGRES_USER),
      password: helpers.checkIfEnvExist(process.env.POSTGRES_PASSWORD),
      database: helpers.checkIfEnvExist(process.env.POSTGRES_DB),
      entities: [
        path.resolve(__dirname + '../../../') +
          '/**/entities/*.entity{.ts,.js}',
      ],
      migrations: [
        path.resolve(__dirname + '../../../') + '/**/migrations/*{.ts,.js}',
      ],
      subscribers: [
        path.resolve(__dirname + '../../../') + '/**/subscribers/*{.ts,.js}',
      ],
      //synchronize: helpers.isDev(),
      dropSchema: helpers.isDev(),
      migrationsRun: helpers.runMigrations(),
      logging: helpers.isDev ? 'all' : ['error'],
    };
  }
}
