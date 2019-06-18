import { Provider } from "./provider";
import { EmployTimetable } from "../entity/employTimetable";
import { Employ } from "../entity/employ";
import { Timetable } from "../entity/timetable";
import { Day } from "../entity/day";
import { TimeRange } from "../entity/timeRange";
import { GroupEmployee } from "../entity/groupEmployee";

export class SheduleProvider extends Provider {
    /**
     * @param id id сотрудника, чье расписание будет загружено
     * @param date 
     */
    load(id: string, date?: any): any {    
          
      let result: any[];
      if (date != null && date.start != null) {
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
          
          result = [employTimetable];
      }
      else {
          this.data = this.getDataWithoutDate(id);
          result = [this.data[id]];
      }

      if (result[0] == undefined) {
        result = [new EmployTimetable(new Employ(-1, "", "", "", "", "", "", ""), new Timetable([new Day("", [new TimeRange("","")])]))];
      }    
      
      return result;
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
        let data: any;
        let url: string;
        if (id == "init") {
          url = 'http://localhost:9000/employee/schedule'
        } else {
          url = 'http://localhost:9000/employee/'+id+'/schedule'
        }
        this.getJSON(url, function(err: any, gettingdata: any) {
          // console.log(gettingdata);
 
          if (JSON.parse(gettingdata).Status == "Succes") {
            data = JSON.parse(gettingdata).Data;
          } else {
            return
          }
        });
        
        if (data.Employee == null) {
          let result = {"-1": [new EmployTimetable(new Employ(-1, "", "", "", "", "", "", ""), new Timetable([new Day("", [new TimeRange("","")])]))]}
          return result;
        }        

        let days: Day[] = []
        let groupEmployee: GroupEmployee = data.Employee
        let employee = new Employ(groupEmployee.EID, groupEmployee.Lastname, groupEmployee.Firstname, groupEmployee.Middlename, "", "", "", "")

        data.Days.forEach((day: any)=> {
            let range = new TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1])
            days.push(new Day(day.Date, [range]))
        });

        let result: any = {}
        
        result[id] = new EmployTimetable(employee, new Timetable(days))
        return result
    }
    getDataWithDate(id: string, date: any): any {

        let data: any;
        let url: string;
        let urlget: string;
        if (id == "init") {
          url = 'http://localhost:9000/employee/schedule'
        } else {
          url = 'http://localhost:9000/employee/'+id+'/schedule'
        }
        if (date.end) {
          urlget = '?start='+date.start.toLocaleDateString() +'&end=' + date.end.toLocaleDateString()
        } else {
          urlget = '?start='+date.start.toLocaleDateString()
        }

        this.getJSON(url+urlget, function(err: any, gettingdata: any) {
          if (JSON.parse(gettingdata).Status == "Succes") {
            data = JSON.parse(gettingdata).Data;
          } else {
            return
          }
        });
        
        if (data.Employee == null) {
          let result = {"-1": [new EmployTimetable(new Employ(-1, "", "", "", "", "", "", ""), new Timetable([new Day("", [new TimeRange("","")])]))]}
          
          return result;
        }        

        let days: Day[] = []
        let groupEmployee: GroupEmployee = data.Employee
        let employee = new Employ(groupEmployee.EID, groupEmployee.Lastname, groupEmployee.Firstname, groupEmployee.Middlename, "", "", "", "")

        data.Days.forEach((day: any) => {
            let range = new TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1])
            days.push(new Day(day.Date, [range]))
        });

        let result: any = {}
        
        result[id] = new EmployTimetable(employee, new Timetable(days))
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