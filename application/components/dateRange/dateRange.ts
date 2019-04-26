import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { DateRangeUI } from "./dateRangeUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iProvider } from "../../providers/iProvider";
import { DaterangeProvider } from "../../providers/daterangeProvider";

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
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
}