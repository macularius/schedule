"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("../components/menu/menu");
var dateRange_1 = require("../components/dateRange/dateRange");
var shedule_1 = require("../components/shedule/shedule");
var title_1 = require("../components/title/title");
var App = /** @class */ (function () {
    function App() {
        this.components = {
            menu: new menu_1.Menu(),
            sheduleTableTitle: new title_1.Title(),
            sheduleDateRange: new dateRange_1.DateRange(),
            sheduleTableShedule: new shedule_1.Shedule(),
        };
    }
    /**
     *
     */
    App.prototype.run = function () {
    };
    /**
     * собирает из UI компонентов единый Webix объект
     */
    App.prototype.init = function () {
        // @ts-ignore
        webix.protoUI({
            name: "dataview_edit"
            //@ts-ignore
        }, webix.EditAbility, webix.ui.dataview);
        // @ts-ignore
        webix.ui({
            type: "wide",
            cols: [
                // menu
                {
                    rows: this.components.menu.getUI(),
                },
                {
                    rows: [
                        // title
                        {
                            rows: this.components.sheduleTableTitle.getUI(),
                        },
                        // shedule table
                        {
                            id: "shedule table",
                            rows: [
                                // выбор даты
                                {
                                    rows: this.components.sheduleDateRange.getUI(),
                                },
                                // расписание
                                {
                                    id: "shedule table shedule",
                                    rows: this.components.sheduleTableShedule.getUI(),
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        /**
         * добавление слушателей на связанные компоненты
         */
        this.components.menu.subscribeOnUI(this.components.sheduleTableTitle);
        this.components.menu.subscribeOnUI(this.components.sheduleTableShedule);
        this.components.sheduleDateRange.subscribeOnUI(this.components.sheduleTableShedule);
        /**
         * инициализация слушателя календаря в dateRange компоненте
         */
        this.components.sheduleDateRange.init();
    };
    return App;
}());
exports.App = App;
