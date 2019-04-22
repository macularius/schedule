import { Employ } from "./employ";
import { Timetable } from "./timetable";

export class EmployTimetable {
    employ: Employ;
    shedule: Timetable;
    
    constructor(employ: Employ, shedule: Timetable) {
        this.employ = employ;
        this.shedule = shedule;
    }
}