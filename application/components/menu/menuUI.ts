import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class MenuUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
            {
                template: "account",
                height: 80
            },
            {
                view: "menu",
                id: "control_menu",
                layout: "y",
                width: 200,
                subMenuPos: "right",
                select: false,
                
                type:{
                    subsign:true
                }
            },
        ];
    }
    
    renderUI(): void {
    }
    event(e: string): void {
    }
    getWebixUI(): object | Array<object> {
        return this.webixUI;
    }
}