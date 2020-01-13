export class Helpers {
    constructor() {}

    public checkIfEnvExist = (envVariable: string) => {
        if(!envVariable){
            throw `${envVariable} not defined`
        }
        return envVariable
    }
}
