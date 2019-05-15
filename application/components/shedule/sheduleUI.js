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
var event_1 = require("../../kernel/event");
var events_1 = require("../../kernel/events");
var SheduleUI = /** @class */ (function (_super) {
    __extends(SheduleUI, _super);
    function SheduleUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [];
        _this.userID = 0;
        return _this;
    }
    /**
     * Проверяет является-ли id идентификатором пользователя
     * @param id id пользователя
     */
    SheduleUI.prototype.verefication = function (id) {
        if (id == this.userID)
            return true;
        else
            return false;
    };
    SheduleUI.prototype.init = function () {
        var ed = this.eventDispatcher;
        var context = this;
        //@ts-ignore
        $$("shedule items").attachEvent("onBeforeEditStop", function (value, editor) {
            var eventBody = {
                value: value.value,
                editor: editor,
            };
            ed.notify(new event_1.Event(events_1.Events.itemCnahge, eventBody, context));
        });
    };
    SheduleUI.prototype.renderUI = function (timetable) {
        var sheduleItems = [];
        /**
         * проверка на пустоту расписания
         */
        if (timetable.length > 0) {
            timetable[0].shedule.days.forEach(function (day) {
                if (day.ranges[0]) {
                    sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
                }
                else {
                    sheduleItems.push({ date: day.date, shedule: "" });
                }
            });
            var vereficate = this.verefication(timetable[0].employ.id);
            var i = 1;
            var options_1 = {
                weekday: 'short',
            };
            while (new Date(sheduleItems[0].date).getDay() != 1) {
                var newDate = new Date(sheduleItems[0].date).setDate(new Date(sheduleItems[0].date).getDate() - i);
                sheduleItems.unshift({
                    date: newDate,
                    shedule: ""
                });
            }
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view: "scrollview",
                scroll: "x",
                body: {
                    view: "dataview_edit",
                    id: "shedule items",
                    xCount: 7,
                    editable: vereficate,
                    editor: "text",
                    editValue: "shedule",
                    editaction: "click",
                    template: function (item) {
                        var date = new Date(item.date);
                        return "<div class='webix_strong shedule'>" + date.toLocaleDateString()
                            + " " + date.toLocaleString('ru-RU', options_1)
                            + "</div><div>" + item.shedule + "</div>";
                    },
                    data: sheduleItems,
                }
                //@ts-ignore
            }, $$("shedule table"), $$("shedule table shedule"));
        }
        else {
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view: "scrollview",
                scroll: "x",
                body: {}
                //@ts-ignore
            }, $$("shedule table"), $$("shedule table shedule"));
        }
    };
    SheduleUI.prototype.event = function (e) {
    };
    SheduleUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    SheduleUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    return SheduleUI;
}(UI_1.UI));
exports.SheduleUI = SheduleUI;
