import { iUI } from "./iUI";

export abstract class UI implements iUI {
    protected webixUI: any; 
    
    renderUI(): void {
        
    }   
    event(e: string): void {
        
    }
    getWebixUI() {
        
    }
}