export interface iProvider {
    load(p: any): any;
    update(...params: any[]): any;
}