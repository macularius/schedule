import { iComponent } from "./iComponent";
import { iListner } from "./iListner";
import { iUI } from "../ui/iUI";

export abstract class Component implements iComponent, iListner {
    protected UI: iUI;

    constructor(UI: iUI){
        this.UI = UI;
    }

    // iListner
    handleEvent(): void {
    }

    // iComponent
    init(): void {
    }
    makeUI(): void {
    }
}