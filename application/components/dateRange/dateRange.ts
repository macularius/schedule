import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { DateRangeUI } from "./dateRangeUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { DaterangeProvider } from "../../providers/daterangeProvider";
import { iListner } from "../../kernel/iListner";
import { Event } from "../../kernel/event";
import { iProvider } from "../../providers/iProvider";
import { Events } from "../../kernel/events";

export class DateRange extends Component {
    private UI: iUI;
    
    constructor(){
        super(new DaterangeProvider());

        this.UI = new DateRangeUI(new EventDispatcher([this]));
    }
    handleEvent(e: Event): void {
        switch (e.type) {
            case Events.calendarDone:
                this.UI.event(e);
                break;
            case Events.dateClear:
                break;
            case Events.menuItemClick:
                console.log("[dateRange, menuItemClick]", e.body);
                break;
        
            default:
                break;
        }
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
    getProvider(): iProvider {
        return this.provider;
    }
}