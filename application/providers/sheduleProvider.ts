import { Provider } from "./provider";
import { EmployTimetable } from "../entity/employTimetable";
import { Employ } from "../entity/employ";
import { Timetable } from "../entity/timetable";
import { Day } from "../entity/day";
import { TimeRange } from "../entity/timeRange";

export class SheduleProvider extends Provider {
    constructor(){
        super({
                "0_0": new EmployTimetable(
                    new Employ(0, "Коваценко", "Игорь", "Николаевич", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Fri Apr 13 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Fri Apr 14 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "18")]),
                    ])
                ),
                "1_1": new EmployTimetable(
                    new Employ(1, "Иванов", "Иван", "Иванович", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Fri Apr 13 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Fri Apr 14 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("9", "14")]),
                    ])
                ),
                "1_2": new EmployTimetable(
                    new Employ(2, "Петров", "Петр", "Петрович", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Fri Apr 13 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Fri Apr 14 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("12", "18")]),
                    ])
                ),
                "2_1": new EmployTimetable(
                    new Employ(3, "Сидоров", "Сидр", "Сидорович", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Fri Apr 13 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Fri Apr 14 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("11", "16")]),
                    ])
                ),
                "2_2": new EmployTimetable(
                    new Employ(4, "Федоров", "Федр", "Федорович", "23.07.1998", "position", "email", "phone number"),
                    new Timetable([
                        new Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Fri Apr 13 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Fri Apr 14 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("", "")]),
                        new Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                        new Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new TimeRange("8", "18")]),
                    ])
                ),
            }
        );
    }

    /**
     * 
     * @param id id сотрудника, чье расписание будет загружено
     * @param date 
     */
    load(id: string, date?: any): any {
        if (date != null) {
            let employTimetable = {
                employ: this.data[id].employ,
                shedule: {
                    days: new Array(),
                },
            };
    
            if (date.end) {                
                this.data[id].shedule.days.forEach((day: Day) => {
                    if (Date.parse(day.date) >= Date.parse(date.start) 
                     && Date.parse(day.date) <= Date.parse(date.end)) {
                        employTimetable.shedule.days.push(day);
                    }
                });
            }
            else {
                this.data[id].shedule.days.forEach((day: Day) => {
                    if (Date.parse(day.date) == Date.parse(date.start)) {
                        employTimetable.shedule.days.push(day);
                    }
                });
            }
            
            return [employTimetable];
        }
        else {
            return [this.data[id]];
        }
    }
    update(value: any, editor: any, id: any): void {
        console.log(arguments);
        
        let editableDayDate: any;
        let editablesDay: any;

        /**
         * получение даты изменяемого расписания
         */
        editor.config.data.forEach((item: any) => {
            if (item.id == editor.id) {
                editableDayDate = item.date;
                return;
            }
        });
        
        /**
         * получение массива дней расписания, запрошенного сотрудника 
         */
        for(let item in this.data){                       
            if (item == id) {
                editablesDay = this.data[item].shedule.days;
                break;
            }
        }
        
        let editStatus = editablesDay.forEach((day: Day) => {
            if (day.date == editableDayDate) {
                let range = {
                    start: value.split(" - ")[0],
                    end: value.split(" - ")[1],
                }
                day.ranges = [range];
                return true;
            }
            return false
        });

        if (!editStatus) {
            
        }
    }
    
}