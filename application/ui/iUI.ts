import { EventDispatcher } from "../kernel/eventDispatcher";

export interface iUI{
    renderUI(d: any): void;
    event(e: string): void;
    getWebixUI(): any;
    getEventDispatcher(): EventDispatcher;
    init(): void;
}