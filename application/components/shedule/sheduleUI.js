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
        _this.counter = 0;
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
            if (element == "length")
                break; // отсечения метаданных
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
        $$("shedule items").attachEvent("onAfterRender", function () {
            /**
             * Замена добавленных дней на пустое пространство,
             * для избежания редактирования добавленных дней
             */
            var lastEdited;
            for (var i = 0; i < context.counter - 1; i++) {
                //@ts-ignore
                context.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(i)].id).outerHTML = "";
            }
            /**
             * вставка стилизованного пространства на место добавленных
             */
            //@ts-ignore
            context.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(1)].id).outerHTML
                = "<div style='width: " + (160 * context.counter - 1) + "px; height:49px; border-bottom: 1px solid #EDEFF0; border-right: 1px solid #EDEFF0; float: left'><br></div>";
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
            var options_1 = {
                weekday: 'short',
            };
            /**
             * Добавление пустого пространства для выравнивания расписания по понидельнику
             */
            while (new Date(sheduleItems[0].date).getDay() != 1) {
                var currentFirstDay = new Date(sheduleItems[0].date);
                var newFirstDay = currentFirstDay.setDate(currentFirstDay.getDate() - 1);
                sheduleItems.unshift({
                    date: new Date(newFirstDay).toString(),
                    id: "",
                    shedule: ""
                });
                this.counter++;
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
         * Замена добавленных дней на пустое пространство,
         * для избежания редактирования добавленных дней
         */
        for (var i = 0; i < this.counter - 1; i++) {
            //@ts-ignore
            this.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(i)].id).outerHTML = "";
        }
        /**
         * вставка стилизованного пространства на место добавленных
         */
        //@ts-ignore
        this.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(1)].id).outerHTML
            = "<div style='width: " + (160 * this.counter - 1) + "px; height:49px; border-bottom: 1px solid #EDEFF0; border-right: 1px solid #EDEFF0; float: left'><br></div>";
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
