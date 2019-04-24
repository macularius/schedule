import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { MenuUI } from "./menuUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class Menu extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new MenuUI(new EventDispatcher([this]));
    }
    
    handleEvent(): void {
    }
    
    init(): void {
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
}