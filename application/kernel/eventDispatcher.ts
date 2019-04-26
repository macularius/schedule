import { iListner } from "./iListner";

export class EventDispatcher {
    listners: iListner[];

    constructor(listners: iListner[]){
        this.listners = listners;
    }

    subscribe(e: iListner){
        this.listners.push(e);
    }
    notify(e: string){
        this.listners.forEach(listner => {
            listner.handleEvent(e);
        });
    }
}