import { Events } from "./events";

/**
 * @param type string тип события для идентификации в обработчике
 * @param body тело сообщения события
 * @param context объект события
 */
export class Event {
    public type: Events;
    public body: any;
    public context: any;

    constructor(type: Events, body: any, context: any) {
        this.type = type;
        this.body = body;
        this.context = context;
    }
}