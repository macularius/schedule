import { Event } from "./event";

export interface iListner{
    handleEvent(e: Event): void;
}