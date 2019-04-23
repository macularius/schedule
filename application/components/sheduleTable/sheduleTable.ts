import { Component } from "../../kernel/component";
import { iUI } from "../../ui/iUI";
import { MenuUI } from "../menu/menuUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class SheduleTable extends Component {
    private UI: iUI;
    
    constructor(){
        super();

        this.UI = new MenuUI(new EventDispatcher([this]));
    }
    
    handleEvent(): void {
    }
    
    init(): void {
    }
    getUI(): void {
    }
}