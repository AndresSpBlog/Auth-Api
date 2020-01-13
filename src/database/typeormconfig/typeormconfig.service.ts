import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Helpers } from 'src/utils/helpers';

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
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
      migrations: [__dirname + '/**/migrations/*{.ts,.js}'],
      subscribers: [__dirname + '/**/subscribers/*{.ts,.js}'],
      synchronize: true,
      logging:
        helpers.checkIfEnvExist(process.env.MODE) === 'DEV' ? 'all' : ['error'],
    };
  }
}
