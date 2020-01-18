import * as crypto from 'crypto';

export class Helpers {
  constructor() {}

  public checkIfEnvExist = (envVariable: string) => {
    if (!envVariable) {
      throw `${envVariable} not defined`;
    }
    return envVariable;
  };

  public isDev = () => this.checkIfEnvExist(process.env.MODE) === 'DEV';

  public runMigrations = () =>
    !!this.checkIfEnvExist(process.env.RUN_MIGRATIONS) === true;

  public hashPassword = (password: string) =>
    crypto.createHmac('sha256', password).digest('hex');
}
