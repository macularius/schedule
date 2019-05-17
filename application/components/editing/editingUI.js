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
var EditingUI = /** @class */ (function (_super) {
    __extends(EditingUI, _super);
    function EditingUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [
            {
                rows: [
                    { template: "По дате" },
                    { template: "Шаблон" }
                ],
            }
        ];
        return _this;
    }
    EditingUI.prototype.init = function () {
    };
    EditingUI.prototype.renderUI = function () {
    };
    EditingUI.prototype.event = function (e) {
    };
    EditingUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    EditingUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    return EditingUI;
}(UI_1.UI));
exports.EditingUI = EditingUI;
