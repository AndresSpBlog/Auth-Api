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
}
