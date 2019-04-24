import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class Shedule extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }

    handleEvent(e: string): void {
        alert(e);
    }
    
    init(): void {
    }
    getUI(): any {
        return { template: "shedule", };
    }
}