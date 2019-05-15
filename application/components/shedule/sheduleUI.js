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
    SheduleUI.prototype.getDataviewItemById = function (id) {
        var elements = document.getElementsByClassName("webix_dataview_item");
        for (var element in elements) {
            if (elements[element].getAttribute('webix_l_id') != null
                && Number(elements[element].getAttribute('webix_l_id')) == id) {
                // console.log(elements[element]);
                return elements[element];
            }
        }
        return null;
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
         * проверка на пустоту timetable сотрудника
         */
        if (timetable.length > 0) {
            timetable[0].shedule.days.forEach(function (day) {
                if (day.ranges[0].start != "") {
                    sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
                }
                else {
                    sheduleItems.push({ date: day.date, shedule: "" });
                }
            });
            var isEdit = this.verefication(timetable[0].employ.id);
            var i = 1;
            var options_1 = {
                weekday: 'short',
            };
            /**
             * проверка на пустоту расписаний в timetable
             */
            if (sheduleItems.length > 0) {
                while (new Date(Date.parse(sheduleItems[0].date)).getDay() != 1) {
                    var newDate = new Date(sheduleItems[0].date).setDate(new Date(sheduleItems[0].date).getDate() - i);
                    sheduleItems.unshift({
                        date: new Date(newDate).toString(),
                        shedule: ""
                    });
                }
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
                    editable: isEdit,
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
        /**
         * пустое пространство на месте, добавленных пустых дней
         * (дни добавляются дополняя выборку так, чтобы первый день был понедельник)
         */
        var elements = new Array(), element, c = 0;
        //@ts-ignore
        for (var item in $$('shedule items').data.pull) {
            //@ts-ignore
            if ($$('shedule items').data.pull[item].shedule == "") {
                //@ts-ignore
                element = this.getDataviewItemById($$('shedule items').data.pull[item].id);
                if (element != null) {
                    elements.push(element);
                    c++;
                }
            }
            else
                break;
        }
        if (elements.length > 1) {
            for (var i = 0; i < elements.length - 1; i++) {
                elements[i].outerHTML = "<div style='float: left; width: 160px; height: 49px; border-bottom: 1px solid #EDEFF0;'><br></div>";
            }
            elements[elements.length - 1].outerHTML = "<div style='float: left; width: 159px; height: 49px; border-bottom: 1px solid #EDEFF0; border-right: 1px solid #EDEFF0;'><br></div>";
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
