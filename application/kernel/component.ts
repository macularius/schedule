import { iComponent } from "./iComponent";
import { iListner } from "./iListner";
import { iProvider } from "../providers/iProvider";
import { Event } from "./event";

export abstract class Component implements iComponent, iListner {
    protected provider: iProvider;
    
    constructor(p: iProvider){
        this.provider = p;
    }

    // iListner
    handleEvent(e: Event): void {
    }

    // iComponent
    init(): void {
    }
    getUI(): any {
    }
    subscribeOnUI(e: iListner): void{
    }
}