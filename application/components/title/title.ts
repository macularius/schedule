import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { TitleUI } from "./titleUI";

export class Title extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new TitleUI(new EventDispatcher([this]));
    }
    
    handleEvent(): void {
    }
    
    init(): void {
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
}