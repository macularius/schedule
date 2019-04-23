import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { MenuUI } from "../menu/menuUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class Title extends Component {
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
        return { template: "title", };
    }
}