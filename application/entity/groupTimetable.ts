import { EmployTimetable } from "./employTimetable";

export class GroupTimetable {
    employees: EmployTimetable[];

    constructor(employees: EmployTimetable[]) {
        this.employees = employees;
    }
}