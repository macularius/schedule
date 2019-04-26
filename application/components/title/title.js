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
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var titleUI_1 = require("./titleUI");
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        var _this = _super.call(this) || this;
        _this.UI = new titleUI_1.TitleUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    Title.prototype.handleEvent = function (e) {
        this.UI.event(e);
    };
    Title.prototype.init = function () {
    };
    Title.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    Title.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    return Title;
}(component_1.Component));
exports.Title = Title;
