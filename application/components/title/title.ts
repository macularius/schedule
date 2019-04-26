import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { TitleUI } from "./titleUI";
import { iListner } from "../../kernel/iListner";

export class Title extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new TitleUI(new EventDispatcher([this]));
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