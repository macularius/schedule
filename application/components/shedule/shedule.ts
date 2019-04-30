import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";
import { SheduleProvider } from "../../providers/sheduleProvider";
import { Event } from "../../kernel/event";
import { iProvider } from "../../providers/iProvider";
import { Events } from "../../kernel/events";

export class Shedule extends Component {
    private UI: iUI;
    public currentID: string;
    
    constructor(){
        super(new SheduleProvider());

        this.currentID = '';

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }

    handleEvent(e: Event): void {
        switch (e.type) {
            case Events.calendarDone:
                if (this.currentID != "") {
                    
                    // this.UI.renderUI(this.provider.loadWithDate(this.currentID, date));
                }
                break;
            case Events.dateClear:
                if (this.currentID != "") {
                    this.UI.renderUI(this.provider.load(this.currentID));
                }
                // console.log("[shedule, dateClear]", e.body, e.context, e.type);
                break;
            /**
             * обновление расписания по нажатию кнопки меню
             */
            case Events.menuItemClick:
                let id = e.body.slice(7);
                let menuPos = id.slice(0, 1);
                /**
                 * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                 */
                if (id != "" && Number(menuPos) == 0 || id.indexOf("_") != -1) {
                    this.currentID = id;
                    this.UI.renderUI(this.provider.load(this.currentID));
                }
                // console.log("[shedule, menuItemClick]", e.body, e.context, e.type);
                break;
        
            default:
                break;
        }

        // if (e.indexOf("обновление расписания") != -1) {
        // }
        
    }
    
    init(): void {
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
    getProvider(): iProvider {
        return this.provider;
    }
}