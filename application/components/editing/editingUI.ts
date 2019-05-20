import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";

export class EditingUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        
        this.webixUI = [
            {
                id: "edit",
                rows:[
                    { template: "По дате" },
                    { template: "Шаблон" }
                ],
            }
        ];
    }
    
    init() {
    }
    renderUI() {
        //@ts-ignore
        if ($$("edit") == null) {
            //@ts-ignore
            $$("shedule table").addView(this.webixUI[0]);
        }
    }
    event(e: Event): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
    destroy() {
        //@ts-ignore
        $$("shedule table").removeView("edit");
    }
}