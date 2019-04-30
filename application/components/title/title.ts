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
                //@ts-ignore
                $$("shedule table title").setHTML(e.body);

                // console.log("[title, menuItemClick]", e.body);
                break;
        
            default:
                break;
        }
        this.UI.event(e);
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