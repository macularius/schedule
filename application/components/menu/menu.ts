import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { MenuUI } from "./menuUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { MenuProvider } from "../../providers/menuProvider";
import { iListner } from "../../kernel/iListner";
import { Event } from "../../kernel/event";
import { iProvider } from "../../providers/iProvider";
import { Events } from "../../kernel/events";

export class Menu extends Component {
    private UI: iUI;
    
    constructor(){
        super(new MenuProvider());

        this.UI = new MenuUI(new EventDispatcher([this]));

        this.UI.renderUI(this.provider.load());
    }
    
    handleEvent(e: Event): void {
        switch (e.type) {   
            case Events.menuItemClick:
                if (e.body.context == "exit") {
                    location.replace("http://localhost:9000/authentication/logout");
                }
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
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
    getProvider(): iProvider {
        return this.provider;
    }
}