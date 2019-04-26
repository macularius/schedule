"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher(listners) {
        this.listners = listners;
    }
    EventDispatcher.prototype.subscribe = function (e) {
        this.listners.push(e);
    };
    EventDispatcher.prototype.notify = function (e) {
        console.log(this.listners);
        this.listners.forEach(function (listner) {
            listner.handleEvent(e);
        });
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
