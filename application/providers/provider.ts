import { iProvider } from "./iProvider";

export abstract class Provider implements iProvider {
    load(): any {
    }
    update(...params: any[]): any {
    }
}