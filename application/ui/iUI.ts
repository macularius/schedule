export interface iUI{
    renderUI(): void;
    event(e: string): void;
    getWebixUI(): Array<object>;
}