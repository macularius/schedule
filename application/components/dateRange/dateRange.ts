import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { DateRangeUI } from "./dateRangeUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { DaterangeProvider } from "../../providers/daterangeProvider";
import { iListner } from "../../kernel/iListner";

export class DateRange extends Component {
    private UI: iUI;
    
    constructor(){
        super(new DaterangeProvider());

        this.UI = new DateRangeUI(new EventDispatcher([this]));
    }
    handleEvent(e: string): void {
        this.UI.event(e);
    }
    init(): void {
        this.UI.init();
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
    subscribeOnUI(e: iListner): void{
        this.UI.getEventDispatcher().subscribe(e);
    }
}