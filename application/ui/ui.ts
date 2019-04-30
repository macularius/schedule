import { iUI } from "./iUI";
import { EventDispatcher } from "./../kernel/eventDispatcher";
import { Event } from "../kernel/event";

export abstract class UI implements iUI {
    protected webixUI: any; 
    public eventDispatcher: EventDispatcher;

    constructor(eventDispatcher: EventDispatcher){
        this.eventDispatcher = eventDispatcher;
    }
    
    renderUI(d: any): void {
    }   
    event(e: Event): void {
    }
    getWebixUI(): any {
    }
    getEventDispatcher(): any {
    }
    init(): void {
    }
}