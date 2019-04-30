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
var menuUI_1 = require("./menuUI");
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var menuProvider_1 = require("../../providers/menuProvider");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super.call(this, new menuProvider_1.MenuProvider()) || this;
        _this.UI = new menuUI_1.MenuUI(new eventDispatcher_1.EventDispatcher([_this]));
        _this.UI.renderUI(_this.provider.load("all"));
        return _this;
    }
    Menu.prototype.handleEvent = function (e) {
        switch (e.type) {
            default:
                break;
        }
    };
    Menu.prototype.init = function () {
        this.UI.init();
    };
    Menu.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    Menu.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    Menu.prototype.getProvider = function () {
        return this.provider;
    };
    return Menu;
}(component_1.Component));
exports.Menu = Menu;
