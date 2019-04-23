import { iListner } from "./iListner";

export class EventDispatcher {
    listners: iListner[];

    constructor(listners: iListner[]){
        this.listners = listners;
    }

    subscribe(e: iListner){

    }
    notify(e: string){

    }
}