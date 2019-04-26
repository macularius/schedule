import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";

export class Shedule extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }

    handleEvent(e: string): void {
        this.UI.event(e);
    }
    
    init(): void {
    }
    getUI(): any {
        return { template: "shedule", };
    }
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
}