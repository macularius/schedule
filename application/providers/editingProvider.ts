import { Provider } from "./provider";
import { EmployTimetable } from "../entity/employTimetable";
import { Employ } from "../entity/employ";
import { Timetable } from "../entity/timetable";
import { Day } from "../entity/day";
import { TimeRange } from "../entity/timeRange";

export class EditingProvider extends Provider {
    constructor(){
        super({
            "1": {
                "mon": { start: "14", end: "18" },
                "tue": { start: "14", end: "18" },
                "wed": { start: "9", end: "18" },
                "thu": { start: "", end: "" },
                "fri": { start: "9", end: "18" },
                "sat": { start: "", end: "" },
                "sun": { start: "", end: "" },
            },
            "2": {
                "mon": { start: "14", end: "18" },
                "tue": { start: "14", end: "18" },
                "wed": { start: "9", end: "18" },
                "thu": { start: "", end: "" },
                "fri": { start: "9", end: "18" },
                "sat": { start: "", end: "" },
                "sun": { start: "", end: "" },
            }
        });
    }

    load(id: string): any {
        return this.data[id];
    }
    update(t_id: string, day: string, value: any): void {
        if (value.start != null) {
            this.data[t_id][day].start = value.start;
        }
        if (value.end != null) {
            this.data[t_id][day].end = value.end;
        } 
    }
}