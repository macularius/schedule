import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { TitleUI } from "./titleUI";
import { iListner } from "../../kernel/iListner";
import { TitleProvider } from "../../providers/titleProvider";
import { Event } from "../../kernel/event";
import { iProvider } from "../../providers/iProvider";
import { Events } from "../../kernel/events";

export class Title extends Component {
    private UI: iUI;
    
    constructor(){
        super(new TitleProvider());

        this.UI = new TitleUI(new EventDispatcher([this]));
    }
    
    handleEvent(e: Event): void {
        switch (e.type) {
            case Events.menuItemClick:
                let id = e.body.groupId + "_" + e.body.employeeId;

                if (e.body.context == "shedule") {
                    if (e.body.groupId != "" || id.indexOf("_") != -1) {
                        if (e.body.groupId == "0") {
                            //@ts-ignore
                            $$("shedule table title").setHTML("<b>Мое расписание</b>");
                        }
                        else{
                            //@ts-ignore
                            $$("shedule table title").setHTML("<b>" + this.provider.load(id));    
                        }
                    }
                }
                if (e.body.context == "edit") {
                    //@ts-ignore
                    $$("shedule table title").setHTML("<b>Редактирование</b>");    
                }
                break;
        
            default:
                break;
        }
        this.UI.event(e);
    }
    
    init(): void {
        //@ts-ignore
        $$("shedule table title").setHTML("<b>Мое расписание</b>");
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