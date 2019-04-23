import { iComponent } from "./iComponent";
import { iListner } from "./iListner";

export abstract class Component implements iComponent, iListner {
    // iListner
    handleEvent(): void {
    }

    // iComponent
    init(): void {
    }
    getUI(): void {
    }
}