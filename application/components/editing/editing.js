"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../../kernel/component");
var editingUI_1 = require("./editingUI");
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var events_1 = require("../../kernel/events");
var editingProvider_1 = require("../../providers/editingProvider");
var Editing = /** @class */ (function (_super) {
    __extends(Editing, _super);
    function Editing() {
        var _this = _super.call(this, new editingProvider_1.EditingProvider()) || this;
        _this.UI = new editingUI_1.EditingUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    Editing.prototype.handleEvent = function (e) {
        switch (e.type) {
            case events_1.Events.calendarDone:
                console.log("editing, calendarDone");
                break;
            case events_1.Events.dateClear:
                console.log("editing, dateClear");
                break;
            case events_1.Events.menuItemClick:
                if (e.body.context == "edit") {
                    this.UI.renderUI();
                }
                else {
                    this.UI.destroy();
                }
                break;
            case events_1.Events.itemCnahge:
                console.log("editing, itemCnahge");
                break;
            default:
                break;
        }
    };
    Editing.prototype.init = function () {
        this.UI.init();
    };
    Editing.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    Editing.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    Editing.prototype.getProvider = function () {
        return this.provider;
    };
    return Editing;
}(component_1.Component));
exports.Editing = Editing;
