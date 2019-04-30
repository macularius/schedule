"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param type string тип события для идентификации в обработчике
 * @param body тело сообщения события
 * @param context объект события
 */
var Event = /** @class */ (function () {
    function Event(type, body, context) {
        this.type = type;
        this.body = body;
        this.context = context;
    }
    return Event;
}());
exports.Event = Event;
