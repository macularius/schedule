import { Menu } from "../components/menu/menu";
import { DateRange } from "../components/dateRange/dateRange";
import { Shedule } from "../components/shedule/shedule";
import { Title } from "../components/title/title";
import { Component } from "./component";

export class App{
    private components: { [key:string]:Component; };

    constructor(){
        this.components = {
            menu: new Menu(),
            sheduleTableTitle: new Title(),
            sheduleDateRange: new DateRange(),
            sheduleTableShedule: new Shedule(),
        };
    }

    /**
     * 
     */
    public run(): void{
        this.components.menu.subscribeOnUI(this.components.sheduleTableTitle);
        this.components.menu.subscribeOnUI(this.components.sheduleTableShedule);
        
        this.components.sheduleDateRange.subscribeOnUI(this.components.sheduleTableShedule);
    }
    /**
     * собирает из UI компонентов единый Webix объект
     */
    public init(): void{
        // @ts-ignore js имеет доступ к webix в index.html
        webix.ui({
            type: "wide",
            cols: [
                // menu
                {
                    rows: this.components.menu.getUI(),
                },
                {
                    rows:[
                        // title
                        {
                            rows: this.components.sheduleTableTitle.getUI(),
                        },
                        // shedule table
                        {
                            id: "content_body",
                            rows:[
                                // выбор даты
                                {
                                    rows: this.components.sheduleDateRange.getUI(),
                                },
                                // расписание
                                {
                                    rows: this.components.sheduleTableShedule.getUI(),
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }
}