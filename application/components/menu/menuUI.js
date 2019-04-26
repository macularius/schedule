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
var MenuUI = /** @class */ (function (_super) {
    __extends(MenuUI, _super);
    function MenuUI(ed) {
        var _this = _super.call(this, ed) || this;
        console.log(_this.eventDispatcher);
        _this.webixUI = [
            {
                template: "account",
                height: 80
            },
            {
                view: "menu",
                id: "menu",
                layout: "y",
                width: 200,
                subMenuPos: "right",
                select: false,
                data: [
                    // Кнопка меню "Расписание"
                    {
                        id: "menu_1",
                        value: "Расписание",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            data: [
                                // Кнопка сабменю "Мое расписание"
                                {
                                    id: "menu_1_0",
                                    value: "Мое расписание"
                                },
                            ],
                        },
                    },
                    {
                        // Кнопка меню "Шаблоны"
                        id: "menu_2",
                        value: "Шаблоны",
                        data: [],
                    },
                    {
                        $template: "Separator"
                    },
                    // Кнопка меню "Настройки"
                    {
                        id: "menu_3",
                        value: "Настройки",
                    },
                    // Кнопка меню "Помощь"
                    {
                        id: "menu_4",
                        value: "Помощь"
                    },
                    // Кнопка меню "Выход"
                    {
                        id: "menu_5",
                        value: "Выход"
                    },
                ],
                type: {
                    subsign: true
                },
                on: {
                    onMenuItemClick: function (id) {
                        ed.notify(id);
                    },
                },
            },
        ];
        return _this;
    }
    /**
     * обновляет webixUI, в соответствии с заданными данными групп
     * @param groups массив групп, содержащих имена сотрудников
     * @param menuSheduleItems указатель на область данных, соотвутствующих пункту меню с группами
     *                         webixUI[1]              - панель управления меню
     *                         webixUI[1].data[0]      - submenu "Расписание"
     *                         webixUI[1].data[0].data - контейнер массива расписаний групп
     */
    MenuUI.prototype.renderUI = function (groups) {
        var menuSheduleItems = this.webixUI[1].data[0].data.data;
        var g = 1; // group counter
        var e = 1; // employees counter
        /**
         * добавляет каждого сотрудника, каждой группы в меню
         */
        groups.forEach(function (group) {
            var groupui = {
                id: "menu_1_" + g,
                open: false,
                value: "Группа " + group.id,
                data: new Array(),
            };
            group.employees.forEach(function (employee) {
                var empui = {
                    id: "control_menu_1_" + g + "_" + e++,
                    value: employee.lastname + " " +
                        employee.firstname.slice(0, 1) + " " +
                        employee.middlename.slice(0, 1),
                };
                groupui.data.push(empui);
            });
            menuSheduleItems.push(groupui);
            e = 1;
            g++;
        });
    };
    MenuUI.prototype.event = function (e) {
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
