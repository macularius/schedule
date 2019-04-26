import { iProvider } from "./iProvider";

export abstract class Provider implements iProvider {
    protected data: any;

    constructor(data: any){
        this.data = data;
    }

    load(p :any): any {
    }
    update(...params: any[]): any {
    }
}