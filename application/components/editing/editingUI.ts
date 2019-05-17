import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";

export class EditingUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        
        this.webixUI = [
            {
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
        
    }
    event(e: Event): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}