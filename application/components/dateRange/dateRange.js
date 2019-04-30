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
var dateRangeUI_1 = require("./dateRangeUI");
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var daterangeProvider_1 = require("../../providers/daterangeProvider");
var events_1 = require("../../kernel/events");
var DateRange = /** @class */ (function (_super) {
    __extends(DateRange, _super);
    function DateRange() {
        var _this = _super.call(this, new daterangeProvider_1.DaterangeProvider()) || this;
        _this.UI = new dateRangeUI_1.DateRangeUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    DateRange.prototype.handleEvent = function (e) {
        switch (e.type) {
            case events_1.Events.calendarDone:
                break;
            case events_1.Events.dateClear:
                console.log("[dateRange, dateClear]", e.body);
                break;
            case events_1.Events.menuItemClick:
                console.log("[dateRange, menuItemClick]", e.body);
                break;
            default:
                break;
        }
        this.UI.event(e);
    };
    DateRange.prototype.init = function () {
        this.UI.init();
    };
    DateRange.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    DateRange.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    DateRange.prototype.getProvider = function () {
        return this.provider;
    };
    return DateRange;
}(component_1.Component));
exports.DateRange = DateRange;
