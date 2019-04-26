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
    SheduleProvider.prototype.load = function () {
        return new employTimetable_1.EmployTimetable(new employ_1.Employ(1, "Коваценко", "Игорь", "Николаевич", "23.07.1998", "position", "email", "phone number"), new timetable_1.Timetable([
            new day_1.Day("Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
            new day_1.Day("Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", [new timeRange_1.TimeRange("9", "18")]),
        ]));
    };
    SheduleProvider.prototype.update = function () {
    };
    return SheduleProvider;
}(provider_1.Provider));
exports.SheduleProvider = SheduleProvider;
