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
                    id: "shedule_date",
                    view:"daterangepicker",
                    format:"%d.%m.%Y",
                    width: 300,
                    label:"Период",
                },
            },
        ];
    }

    init(){
        let ed = this.eventDispatcher;
        
        //@ts-ignore
        $$("$daterangesuggest1_daterange").attachEvent("onDateClear", function() {
            ed.notify("cleared");
        });
        //@ts-ignore
        $$("$button1").attachEvent("onItemClick", function() {
            ed.notify("обновление расписания");
        })
    }
    renderUI(): void {
    }
    event(e: string): void {
        //@ts-ignore
        webix.message("daterange:\n" + e);
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}