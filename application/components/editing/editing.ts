import { Component } from "../../kernel/component";
import { SheduleProvider } from "../../providers/sheduleProvider";
import { EditingUI } from "./editingUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";
import { iProvider } from "../../providers/iProvider";
import { Event } from "../../kernel/event";
import { Events } from "../../kernel/events";
import { UI } from "../../ui/UI";
import { EditingProvider } from "../../providers/editingProvider";

export class Editing extends Component {
    private UI: EditingUI;

    constructor(){
        super(new EditingProvider());

        this.UI = new EditingUI(new EventDispatcher([this]));
    }

    handleEvent(e: Event){
        switch (e.type) {
            case Events.calendarDone:
                console.log("editing, calendarDone");
                break;
            case Events.dateClear:
                console.log("editing, dateClear");
                break;
            case Events.menuItemClick:
                if (e.body.context == "edit") {
                    this.UI.renderUI();
                }
                else {
                    this.UI.destroy();
                }
                break;
            case Events.itemCnahge:
                console.log("editing, itemCnahge");
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