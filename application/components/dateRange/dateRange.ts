import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { DateRangeUI } from "./dateRangeUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iProvider } from "../../providers/iProvider";

export class DateRange extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new DateRangeUI(new EventDispatcher([this]));
    }
    handleEvent(): void {
    }
    
    init(): void {
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
}