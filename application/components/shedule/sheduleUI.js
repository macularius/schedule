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
var UI_1 = require("../../ui/UI");
var SheduleUI = /** @class */ (function (_super) {
    __extends(SheduleUI, _super);
    function SheduleUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [];
        return _this;
    }
    SheduleUI.prototype.renderUI = function (timetable) {
        var sheduleItems = [];
        /**
         * проверка на пустоту расписания
         */
        if (timetable.length > 0) {
            timetable[0].shedule.days.forEach(function (day) {
                sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
            });
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view: "scrollview",
                scroll: "x",
                body: {
                    view: "dataview_edit",
                    xCount: timetable[0].shedule.days.length,
                    editable: true,
                    editor: "text",
                    editValue: "schedule",
                    editaction: "click",
                    template: function (item) {
                        var date = new Date(item.date);
                        return "<div class='webix_strong'>" + date.toLocaleDateString() + "</div><div>" + item.shedule + "</div>";
                    },
                    data: sheduleItems,
                }
                //@ts-ignore
            }, $$("shedule table shedule"));
        }
        else {
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view: "scrollview",
                scroll: "x",
                body: {}
                //@ts-ignore
            }, $$("shedule table shedule"));
        }
    };
    SheduleUI.prototype.event = function (e) {
        //@ts-ignore
        webix.message("shedule:\n" + e);
    };
    SheduleUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    SheduleUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    SheduleUI.prototype.init = function () {
    };
    return SheduleUI;
}(UI_1.UI));
exports.SheduleUI = SheduleUI;
