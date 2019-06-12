import { GroupEmployee } from "./groupEmployee";


export class Group {
    public GID: number;
    public Name: string;
    public Employees: GroupEmployee[];

    constructor(i: any, e: GroupEmployee[], n: string) {
        this.GID = i;
        this.Employees = e;
        this.Name = n;
    }
}