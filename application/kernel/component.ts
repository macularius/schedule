import { iComponent } from "./iComponent";
import { iUI } from "../ui/iUI";
import { iListner } from "./iListner";

export abstract class Component implements iComponent, iListner {
    protected ui: iUI;

    // iListner
    handleEvent(): void {
    }

    // iComponent
    init(): void {
    }
    makeUI(): void {
    }
}