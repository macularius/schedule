import { Provider } from "./provider";
import { EmployTimetable } from "../entity/employTimetable";
import { Employ } from "../entity/employ";
import { Timetable } from "../entity/timetable";
import { Day } from "../entity/day";
import { TimeRange } from "../entity/timeRange";

export class SheduleProvider extends Provider {
    constructor(){
        super(
            [
                new EmployTimetable(
                    new Employ(1, "Коваценко", "Игорь", "Николаевич", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                    ])
                )
            ]);
    }

    load() {
        return this.data;
    }
    update() {
    }
}