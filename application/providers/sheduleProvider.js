"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var provider_1 = require("./provider");
var employTimetable_1 = require("../entity/employTimetable");
var employ_1 = require("../entity/employ");
var timetable_1 = require("../entity/timetable");
var day_1 = require("../entity/day");
var timeRange_1 = require("../entity/timeRange");
var SheduleProvider = /** @class */ (function (_super) {
    __extends(SheduleProvider, _super);
    function SheduleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param id id сотрудника, чье расписание будет загружено
     * @param date
     */
    SheduleProvider.prototype.load = function (id, date) {
        var result;
        if (date != null && date.start != null) {
            this.data = this.getDataWithDate(id, date);
            var employTimetable_2 = {
                employ: this.data[id].employ,
                shedule: {
                    days: new Array(),
                },
            };
            if (date.end) {
                this.data[id].shedule.days.forEach(function (day) {
                    if (Date.parse(day.date) >= Date.parse(date.start)
                        && Date.parse(day.date) <= Date.parse(date.end)) {
                        employTimetable_2.shedule.days.push(day);
                    }
                });
            }
            else {
                this.data[id].shedule.days.forEach(function (day) {
                    if (Date.parse(day.date) == Date.parse(date.start)) {
                        employTimetable_2.shedule.days.push(day);
                    }
                });
            }
            result = [employTimetable_2];
        }
        else {
            this.data = this.getDataWithoutDate(id);
            result = [this.data[id]];
        }
        if (result[0] == undefined) {
            result = [new employTimetable_1.EmployTimetable(new employ_1.Employ(-1, "", "", "", "", "", "", ""), new timetable_1.Timetable([new day_1.Day("", [new timeRange_1.TimeRange("", "")])]))];
        }
        return result;
    };
    SheduleProvider.prototype.update = function (value, editor, id) {
        var editableDayDate;
        var editablesDay;
        /**
         * получение даты изменяемого расписания
         */
        editor.config.data.forEach(function (item) {
            if (item.id == editor.id) {
                editableDayDate = item.date;
                return;
            }
        });
        /**
         * получение массива дней расписания, запрошенного сотрудника
         */
        for (var item in this.data) {
            if (item == id) {
                editablesDay = this.data[item].shedule.days;
                break;
            }
        }
        var editStatus = editablesDay.forEach(function (day) {
            if (day.date == editableDayDate) {
                var range = {
                    start: value.split(" - ")[0],
                    end: value.split(" - ")[1],
                };
                day.ranges = [range];
                return true;
            }
            return false;
        });
        if (!editStatus) {
        }
    };
    SheduleProvider.prototype.getDataWithoutDate = function (id) {
        var data = [];
        var url;
        if (id == "") {
            url = 'http://localhost:9000/employee/schedule';
        }
        else {
            url = 'http://localhost:9000/employee/' + id + '/schedule';
        }
        this.getJSON(url, function (err, gettingdata) {
            // console.log(gettingdata);
            if (JSON.parse(gettingdata).Status == "Succes") {
                data = JSON.parse(gettingdata).Data;
            }
            else {
                return;
            }
        });
        if (data[0] == null) {
            var result_1 = { "-1": [new employTimetable_1.EmployTimetable(new employ_1.Employ(-1, "", "", "", "", "", "", ""), new timetable_1.Timetable([new day_1.Day("", [new timeRange_1.TimeRange("", "")])]))] };
            return result_1;
        }
        var days = [];
        var employees = {
            "0": new employ_1.Employ(0, "Коваценко", "Игорь", "Николаевич", "", "", "", ""),
            "1": new employ_1.Employ(1, "Федоров", "Федор", "Федорович", "", "", "", "")
        };
        data.forEach(function (day) {
            var range = new timeRange_1.TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1]);
            days.push(new day_1.Day(day.Date, [range]));
        });
        var result = {};
        result[id] = new employTimetable_1.EmployTimetable(employees[id], new timetable_1.Timetable(days));
        return result;
    };
    SheduleProvider.prototype.getDataWithDate = function (id, date) {
        var data = [];
        var url;
        var urlget;
        if (id == "") {
            url = 'http://localhost:9000/employee/schedule';
        }
        else {
            url = 'http://localhost:9000/employee/' + id + '/schedule';
        }
        if (date.end) {
            urlget = '?start=' + date.start.toLocaleDateString() + '&end=' + date.end.toLocaleDateString();
        }
        else {
            urlget = '?start=' + date.start.toLocaleDateString();
        }
        this.getJSON(url + urlget, function (err, gettingdata) {
            if (JSON.parse(gettingdata).Status == "Succes") {
                data = JSON.parse(gettingdata).Data;
            }
            else {
                return;
            }
        });
        if (data[0] == null) {
            var result_2 = { "-1": [new employTimetable_1.EmployTimetable(new employ_1.Employ(-1, "", "", "", "", "", "", ""), new timetable_1.Timetable([new day_1.Day("", [new timeRange_1.TimeRange("", "")])]))] };
            return result_2;
        }
        var days = [];
        var employees = {
            "0": new employ_1.Employ(0, "Коваценко", "Игорь", "Николаевич", "", "", "", ""),
            "1": new employ_1.Employ(1, "Федоров", "Федор", "Федорович", "", "", "", "")
        };
        data.forEach(function (day) {
            var range = new timeRange_1.TimeRange(day.Timerange.split("-")[0], day.Timerange.split("-")[1]);
            days.push(new day_1.Day(day.Date, [range]));
        });
        var result = {};
        result[id] = new employTimetable_1.EmployTimetable(employees[id], new timetable_1.Timetable(days));
        return result;
    };
    SheduleProvider.prototype.getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    ;
    return SheduleProvider;
}(provider_1.Provider));
exports.SheduleProvider = SheduleProvider;
