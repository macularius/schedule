import {iComponent} from "./iComponent";
import { Menu } from "../components/menu/menu";
import { SheduleTable } from "../components/sheduleTable/sheduleTable";
import { DateRange } from "../components/dateRange/dateRange";
import { Shedule } from "../components/shedule/shedule";
import { Title } from "../components/title/title";
import { MenuUI } from "../components/menu/menuUI";
import { SheduleTableUI } from "../components/sheduleTable/sheduleTableUI";
import { TitleUI } from "../components/title/titleUI";
import { DateRangeUI } from "../components/dateRange/dateRangeUI";
import { SheduleUI } from "../components/shedule/sheduleUI";
import { EventDispatcher } from "./eventDispatcher";

export class App{
    private components: { [key:string]:iComponent; };

    constructor(){
        this.components = {
            menu: new Menu(),
            sheduleTableTitle: new Title(),
            sheduleDateRange: new DateRange(),
            sheduleTableShedule: new Shedule(),
        };

        console.log(this.components);
    }

    /**
     * 
     */
    public init(): void{

    }
    /**
     * собирает из UI компонентов в единый Webix объект
     */
    public run(): void{
        // @ts-ignore js имеет доступ к webix в index.html
        webix.ui({
            type: "wide",
            cols: [
                // menu
                this.components.menu.getUI(),
                {
                    rows:[
                        // title
                        this.components.sheduleTableTitle.getUI(),
                        // shedule table
                        {
                            id: "content_body",
                            rows:[
                                // выбор даты
                                this.components.sheduleDateRange.getUI(),
                                // расписание
                                this.components.sheduleTableShedule.getUI(),
                            ],
                        },
                    ],
                },
            ],
        });
    }
}