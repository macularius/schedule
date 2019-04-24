import { iUI } from "./iUI";
import { EventDispatcher } from "./../kernel/eventDispatcher";

export abstract class UI implements iUI {
    protected webixUI: any; 
    protected eventDispatcher: EventDispatcher;

    constructor(eventDispatcher: EventDispatcher){
        this.eventDispatcher = eventDispatcher;
    }
    
    renderUI(d: any): void {
        
    }   
    event(e: string): void {
        
    }
    getWebixUI(): any {

    }
}