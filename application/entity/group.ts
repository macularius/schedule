import { Employ } from "./employ";

export class Group {
    public id: number;
    public employees: Array<Employ>;

    constructor(i: any, e: Employ[]) {
        this.id = i;
        this.employees = e;
    }
}