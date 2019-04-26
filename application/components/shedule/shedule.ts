import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";
import { SheduleProvider } from "../../providers/sheduleProvider";

export class Shedule extends Component {
    private UI: iUI;
    
    constructor(){
        super(new SheduleProvider());

        this.UI = new SheduleUI(new EventDispatcher([this]));

        // this.UI.renderUI(this.provider.load("1_0"));
        // console.log(this.provider.load("1_0"));
    }

    handleEvent(e: string): void {
        // this.UI.event(e);
        let id = e.slice(7);
        this.UI.renderUI(this.provider.load(id));
        // alert(id);
    }
    
    init(): void {
    }
    getUI(): any {
        // return { template: "shedule" };
        return this.UI.getWebixUI();
    }
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
}