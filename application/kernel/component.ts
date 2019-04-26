import { iComponent } from "./iComponent";
import { iListner } from "./iListner";
import { iProvider } from "../providers/iProvider";

export abstract class Component implements iComponent, iListner {
    protected provider: iProvider;
    
    constructor(p: iProvider){
        this.provider = p;
    }

    // iListner
    handleEvent(e: string): void {
    }

    // iComponent
    init(): void {
    }
    getUI(): any {
    }
    subscribeOnUI(e: iListner): void{
    }
}