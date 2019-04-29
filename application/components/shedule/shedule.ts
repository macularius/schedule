import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";
import { SheduleProvider } from "../../providers/sheduleProvider";

export class Shedule extends Component {
    private UI: iUI;
    private currentID: string;
    
    constructor(){
        super(new SheduleProvider());

        this.currentID = '';

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }

    handleEvent(e: string): void {
        this.UI.event(e);

        if (e == "cleared") {
            if (this.currentID != "") {
                this.UI.renderUI(this.provider.load(this.currentID));
            }
        }

        let id = e.slice(7);
        let menuPos = id.slice(0, 1);

        /**
         * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
         */
        if (id != "" && Number(menuPos) == 0 || id.indexOf("_") != -1) {
            this.currentID = id;
            this.UI.renderUI(this.provider.load(this.currentID));
        }
    }
    
    init(): void {
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
}