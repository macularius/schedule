import { iListner } from "./iListner";

export interface iComponent {
    init(): void;
    getUI(): object[];
    subscribeOnUI(e: iListner): void;
}