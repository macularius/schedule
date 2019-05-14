export interface iProvider {
    load(...params: any): any;
    update(...params: any[]): any;
}