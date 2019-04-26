import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

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
    event(e: string): void {
        //@ts-ignore
        $$("shedule table title").setHTML(e);
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