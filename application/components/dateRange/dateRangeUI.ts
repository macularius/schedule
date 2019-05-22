import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";
import { Events } from "../../kernel/events";

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
                    label: "Период",
                    labelAlign: "right",
                    labelWidth: 70,
                },
            },
        ];
    }

    init(){
        let ed = this.eventDispatcher;
        let context = this;
        
        //@ts-ignore
        $$("$daterangesuggest1_daterange").attachEvent("onDateClear", function() {
            ed.notify(new Event(Events.dateClear, "", context));
        });
        //@ts-ignore
        $$("$button1").attachEvent("onItemClick", function() {
            //@ts-ignore
            let date = $$("shedule_date").getValue();
            ed.notify(new Event(Events.calendarDone, date, context));
        })
    }
    renderUI(): void {
    }
    event(e: Event): void {
        if (e.body.groupId && e.body.employeeId) {
            //@ts-ignore
            $$("shedule_date").setValue("");
        }
        if (e.body.start != null) {
            if (e.body.end == null) {
                //@ts-ignore
                webix.message("daterange:\n" + e.body.start.toLocaleDateString());
            }
            else {
                //@ts-ignore
                webix.message("daterange:\n" + e.body.start.toLocaleDateString() + " - " + e.body.end.toLocaleDateString());
            }
        }
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}