"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("../components/menu/menu");
var dateRange_1 = require("../components/dateRange/dateRange");
var shedule_1 = require("../components/shedule/shedule");
var title_1 = require("../components/title/title");
var editing_1 = require("../components/editing/editing");
var App = /** @class */ (function () {
    function App() {
        this.components = {
            menu: new menu_1.Menu(),
            sheduleTableTitle: new title_1.Title(),
            sheduleDateRange: new dateRange_1.DateRange(),
            sheduleTableShedule: new shedule_1.Shedule(),
            editing: new editing_1.Editing(),
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
        //@ts-ignore
        webix.i18n.setLocale("ru-RU");
        //@ts-ignore
        webix.protoUI({
            name: "dataview_edit"
            //@ts-ignore
        }, webix.EditAbility, webix.ui.dataview);
        //@ts-ignore
        webix.ui({
            type: "wide",
            cols: [
                // menu
                {
                    rows: this.components.menu.getUI(),
                },
                {
                    id: "worked place",
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
                                    id: "shedule table date",
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
        this.components.menu.subscribeOnUI(this.components.sheduleDateRange);
        this.components.menu.subscribeOnUI(this.components.editing);
        this.components.sheduleDateRange.subscribeOnUI(this.components.sheduleTableShedule);
        this.components.sheduleDateRange.init();
        this.components.sheduleTableShedule.init();
        this.components.sheduleTableTitle.init();
        this.components.menu.init();
        this.components.editing.init();
    };
    return App;
}());
exports.App = App;
