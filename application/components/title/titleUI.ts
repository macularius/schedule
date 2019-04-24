import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class TitleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
        {
            template: "title", 
            height: 40,
        }];
    }

    renderUI(): void {
    }
    event(e: string): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
}