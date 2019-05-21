import { Menu } from "../components/menu/menu";
import { DateRange } from "../components/dateRange/dateRange";
import { Shedule } from "../components/shedule/shedule";
import { Title } from "../components/title/title";
import { Component } from "./component";
import { Editing } from "../components/editing/editing";

export class App{
    private components: { [key:string]:Component; };

    constructor(){
        this.components = {
            menu: new Menu(),
            sheduleTableTitle: new Title(),
            sheduleDateRange: new DateRange(),
            sheduleTableShedule: new Shedule(),
            editing: new Editing(),
        };
    }

    /**
     * 
     */
    public run(): void{
    }
    /**
     * собирает из UI компонентов единый Webix объект
     */
    public init(): void{
        //@ts-ignore
        webix.i18n.setLocale("ru-RU");

        //@ts-ignore
        webix.protoUI({
            name:"dataview_edit"
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
                    rows:[
                        // title
                        {
                            rows: this.components.sheduleTableTitle.getUI(),
                        },
                        // shedule table
                        {
                            id: "shedule table",
                            rows:[
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
    }
}