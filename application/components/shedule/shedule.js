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
var sheduleUI_1 = require("./sheduleUI");
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var sheduleProvider_1 = require("../../providers/sheduleProvider");
var Shedule = /** @class */ (function (_super) {
    __extends(Shedule, _super);
    function Shedule() {
        var _this = _super.call(this, new sheduleProvider_1.SheduleProvider()) || this;
        _this.UI = new sheduleUI_1.SheduleUI(new eventDispatcher_1.EventDispatcher([_this]));
        _this.UI.renderUI(_this.provider.load("my"));
        return _this;
        // console.log(this.provider.load("my"));
    }
    Shedule.prototype.handleEvent = function (e) {
        this.UI.event(e);
    };
    Shedule.prototype.init = function () {
    };
    Shedule.prototype.getUI = function () {
        // return { template: "shedule" };
        return this.UI.getWebixUI();
    };
    Shedule.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    return Shedule;
}(component_1.Component));
exports.Shedule = Shedule;
