import { Provider } from "./provider";
import { EmployTimetable } from "../entity/employTimetable";
import { Employ } from "../entity/employ";
import { Timetable } from "../entity/timetable";
import { Day } from "../entity/day";
import { TimeRange } from "../entity/timeRange";

export class SheduleProvider extends Provider {
    /**
     * @param id id сотрудника, чье расписание будет загружено
     * @param date 
     */
    load(id: string, date?: any): any {
        if (date != null) {
            this.data = this.getDataWithDate(id, date);
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
            this.data = this.getDataWithoutDate(id);
            return [this.data[id]];
        }
    }
    update(value: any, editor: any, id: any): void {
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
    getDataWithoutDate(id: string): any {
        let data: any[] = [];
        this.getJSON('http://localhost:9000/employee/'+id+'/schedule', function(err: any, gettingdata: any) {
            data = JSON.parse(gettingdata);
        });


        let days: Day[] = []
        let employees: any = {
            "0": new Employ(0, "Коваценко", "Игорь", "Николаевич", "", "", "", ""),
            "1": new Employ(1, "Федоров", "Федор", "Федорович", "", "", "", "")
        }
        
        data.forEach(day => {
            let range = new TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1])
            days.push(new Day(day.Date, [range]))
        });

        let result: any = {}
        result[id] = new EmployTimetable(employees[id], new Timetable(days))
        return result
    }
    getDataWithDate(id: string, date: any): any {
        let data: any[] = [];
        if (date.end) {
            var url = 'http://localhost:9000/employee/'+id+'/schedule?start='+date.start.toLocaleDateString() +'&end=' + date.end.toLocaleDateString()
        } else {
            url = 'http://localhost:9000/employee/'+id+'/schedule?start='+date.start.toLocaleDateString()
        }
        this.getJSON(url, function(err: any, gettingdata: any) {
            data = JSON.parse(gettingdata);
        });


        let days: Day[] = []
        let employees: any = {
            "0": new Employ(0, "Коваценко", "Игорь", "Николаевич", "", "", "", ""),
            "1": new Employ(1, "Федоров", "Федор", "Федорович", "", "", "", "")
        }
        
        data.forEach(day => {
            let range = new TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1])
            days.push(new Day(day.Date, [range]))
        });

        let result: any = {}
        result[id] = new EmployTimetable(employees[id], new Timetable(days))
        return result
    }

    getJSON(url: string, callback: any) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };

}

/*
{
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
*/

/*
data = [
            {
              "Date": "05.31.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.01.2019",
              "Timerange": ""
            },
            {
              "Date": "06.02.2019",
              "Timerange": ""
            },
            {
              "Date": "06.03.2019",
              "Timerange": "1500-1800"
            },
            {
              "Date": "06.04.2019",
              "Timerange": "1200-1800"
            },
            {
              "Date": "06.05.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.06.2019",
              "Timerange": ""
            },
            {
              "Date": "06.07.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.08.2019",
              "Timerange": ""
            },
            {
              "Date": "06.09.2019",
              "Timerange": ""
            },
            {
              "Date": "06.10.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.11.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.12.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.13.2019",
              "Timerange": ""
            },
            {
              "Date": "06.14.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.15.2019",
              "Timerange": ""
            },
            {
              "Date": "06.16.2019",
              "Timerange": ""
            },
            {
              "Date": "06.17.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.18.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.19.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.20.2019",
              "Timerange": ""
            },
            {
              "Date": "06.21.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.22.2019",
              "Timerange": ""
            },
            {
              "Date": "06.23.2019",
              "Timerange": ""
            },
            {
              "Date": "06.24.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.25.2019",
              "Timerange": "1400-1800"
            },
            {
              "Date": "06.26.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.27.2019",
              "Timerange": ""
            },
            {
              "Date": "06.28.2019",
              "Timerange": "0900-1800"
            },
            {
              "Date": "06.29.2019",
              "Timerange": ""
            },
            {
              "Date": "06.30.2019",
              "Timerange": ""
            }
          ];
        
 */