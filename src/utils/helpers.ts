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

  public async executePromisesSequentially(promisesArray: Promise<any>[]) {
    return await promisesArray.reduce((promiseChain, currentPromise) => {
      return promiseChain.then(chainResults =>
        currentPromise.then(currentResult => [...chainResults, currentResult]),
      );
    }, Promise.resolve([]));
  }

  public permissionBuilder(action: string, resource: string): string {
    return `${action}:${resource}`;
  }
}
