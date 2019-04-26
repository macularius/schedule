import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { TitleUI } from "./titleUI";
import { iListner } from "../../kernel/iListner";
import { TitleProvider } from "../../providers/titleProvider";

export class Title extends Component {
    private UI: iUI;
    
    constructor(){
        super(new TitleProvider());

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