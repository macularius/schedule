export interface iProvider {
    load(): any;
    update(...params: any[]): any;
}