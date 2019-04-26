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
    function TitleUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [
            {
                id: "shedule table title",
                template: "title",
                height: 40,
            }
        ];
        return _this;
    }
    TitleUI.prototype.renderUI = function () {
    };
    TitleUI.prototype.event = function (e) {
        //@ts-ignore
        $$("shedule table title").setHTML(e);
    };
    TitleUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    TitleUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    return TitleUI;
}(UI_1.UI));
exports.TitleUI = TitleUI;
