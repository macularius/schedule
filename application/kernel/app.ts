import {iComponent} from "./iComponent";

export class App{
    private components: { [key:string]:iComponent; };

    constructor(components: { [key:string]:iComponent; }){
        this.components = components;
    }

    public init(): void{

    }
    public run(): void{
        
    }
}