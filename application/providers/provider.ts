import { iProvider } from "./iProvider";

export abstract class Provider implements iProvider {
    protected data: any;

    load(p :any): any {
    }
    update(...params: any[]): any {
    }
}