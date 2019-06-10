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
var MenuUI = /** @class */ (function (_super) {
    __extends(MenuUI, _super);
    function MenuUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [
            {
                template: "account",
                height: 80,
            },
            {
                view: "tree",
                id: "menu",
                width: 200,
                select: true,
                css: {
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                },
                data: [
                    // Кнопка меню "Расписание"
                    {
                        id: "menu_1",
                        value: "Расписание",
                        data: [
                            // Кнопка сабменю "Мое расписание"
                            {
                                id: "menu_1_0",
                                value: "Мое расписание"
                            },
                        ],
                    },
                    {
                        // Кнопка меню "Шаблоны"
                        id: "menu_2",
                        value: "Редактирование",
                        data: [],
                    },
                    // Кнопка меню "Выход"
                    {
                        id: "menu_3",
                        value: "Выход"
                    },
                ],
                type: {
                    subsign: true
                },
            },
        ];
        return _this;
    }
    MenuUI.prototype.init = function () {
        var ed = this.eventDispatcher;
        var context = this;
        //@ts-ignore
        $$("menu").attachEvent("onItemClick", function (id) {
            var menuPos = id.slice(5, 6);
            id = id.slice(7);
            var eventBody;
            switch (menuPos) {
                case "1":
                    if (id.indexOf("_") != -1) {
                        eventBody = {
                            context: "shedule",
                            groupId: id.slice(0, id.indexOf("_")),
                            employeeId: id.slice(id.indexOf("_") + 1),
                        };
                    }
                    else {
                        if (id == "0") {
                            eventBody = {
                                context: "shedule",
                                groupId: "0",
                                employeeId: id.slice(id.indexOf("_") + 1),
                            };
                        }
                    }
                    break;
                case "2":
                    eventBody = {
                        context: "edit",
                    };
                    break;
                case "3":
                    eventBody = {
                        context: "exit",
                    };
                    break;
                default:
                    break;
            }
            if (eventBody) {
                ed.notify(new event_1.Event(events_1.Events.menuItemClick, eventBody, context));
            }
        });
    };
    /**
     * обновляет webixUI, в соответствии с заданными данными групп
     * @param groups массив групп, содержащих имена сотрудников
     */
    MenuUI.prototype.renderUI = function (groups) {
        /**
         * menuSheduleItems указатель на область данных, соотвутствующих пункту меню с группами
         *                         webixUI[1]              - панель управления меню
         *                         webixUI[1].data[0]      - submenu "Расписание"
         */
        var menuSheduleItems = this.webixUI[1].data[0].data;
        /**
         * добавляет каждого сотрудника, каждой группы в меню
         */
        groups.forEach(function (group) {
            var groupui = {
                id: "menu_1_" + group.id,
                open: false,
                value: group.name,
                data: new Array(),
            };
            group.employees.forEach(function (employee) {
                var empui = {
                    id: "menu_1_" + group.id + "_" + employee.id,
                    value: employee.lastname + " " +
                        employee.firstname.slice(0, 1) + " " +
                        employee.middlename.slice(0, 1),
                };
                groupui.data.push(empui);
            });
            menuSheduleItems.push(groupui);
        });
    };
    MenuUI.prototype.event = function (e) {
        //@ts-ignore
        webix.message("menu:\n" + e);
    };
    MenuUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    MenuUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    return MenuUI;
}(UI_1.UI));
exports.MenuUI = MenuUI;
