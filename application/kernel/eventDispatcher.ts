import { iListner } from "./iListner";
import { Event } from "./event";

export class EventDispatcher {
    listners: iListner[];

    constructor(listners: iListner[]){
        this.listners = listners;
    }

    subscribe(e: iListner){
        this.listners.push(e);
    }
    notify(e: Event){
        this.listners.forEach(listner => {
            listner.handleEvent(e);
        });
    }
}