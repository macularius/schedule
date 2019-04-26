import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class DateRangeUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
            { 
                view:"scrollview", 
                scroll:false, 
                height: 40,
                body:{
                    id: "schedule_date",
                    view:"daterangepicker", // #TODO перевести в datarange
                    format:"%d.%m.%Y",
                    width: 300,
                    label:"Период", 
                },
            },
        ];
    }

    renderUI(): void {
    }
    event(e: string): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}