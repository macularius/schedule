import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { MenuUI } from "./menuUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iProvider } from "../../providers/iProvider";
import { MenuProvider } from "../../providers/menuProvider";
import { iListner } from "../../kernel/iListner";

export class Menu extends Component {
    private UI: iUI;
    private provider: iProvider;
    
    constructor(){
        super();

        this.provider = new MenuProvider();
        this.UI = new MenuUI(new EventDispatcher([this]));

        this.UI.renderUI(this.provider.load());
    }
    
    handleEvent(e: string): void {
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
}