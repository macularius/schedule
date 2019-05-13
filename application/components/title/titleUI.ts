import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";

export class TitleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
        {
            id: "shedule table title",
            template: "title", 
            height: 40,
        }];
    }

    renderUI(): void {
    }
    event(e: Event): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
    init() {
    }
}