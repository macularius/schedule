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
var UI_1 = require("../../ui/UI");
var MenuUI = /** @class */ (function (_super) {
    __extends(MenuUI, _super);
    function MenuUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [
            {
                template: "account",
                height: 80
            },
            {
                view: "menu",
                id: "control_menu",
                layout: "y",
                width: 200,
                subMenuPos: "right",
                select: false,
                type: {
                    subsign: true
                }
            },
        ];
        return _this;
    }
    MenuUI.prototype.renderUI = function () {
    };
    MenuUI.prototype.event = function (e) {
    };
    MenuUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    return MenuUI;
}(UI_1.UI));
exports.MenuUI = MenuUI;
