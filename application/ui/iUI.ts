import { EventDispatcher } from "../kernel/eventDispatcher";
import { Event } from "../kernel/event";

export interface iUI{
    renderUI(d: any): void;
    event(e: Event): void;
    getWebixUI(): any;
    getEventDispatcher(): EventDispatcher;
    init(): void;
}