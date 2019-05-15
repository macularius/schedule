import { Employ } from "./employ";

export class Group {
    public id: number;
    public name: string;
    public employees: Array<Employ>;

    constructor(i: any, e: Employ[], n: string) {
        this.id = i;
        this.employees = e;
        this.name = n;
    }
}