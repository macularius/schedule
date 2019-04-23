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
var TitleUI = /** @class */ (function (_super) {
    __extends(TitleUI, _super);
    function TitleUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleUI.prototype.renderUI = function () {
    };
    TitleUI.prototype.event = function (e) {
    };
    TitleUI.prototype.getWebixUI = function () {
    };
    return TitleUI;
}(UI_1.UI));
exports.TitleUI = TitleUI;
