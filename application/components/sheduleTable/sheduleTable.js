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
var menuUI_1 = require("../menu/menuUI");
var eventDispatcher_1 = require("../../kernel/eventDispatcher");
var SheduleTable = /** @class */ (function (_super) {
    __extends(SheduleTable, _super);
    function SheduleTable() {
        var _this = _super.call(this) || this;
        _this.UI = new menuUI_1.MenuUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    SheduleTable.prototype.handleEvent = function () {
    };
    SheduleTable.prototype.init = function () {
    };
    SheduleTable.prototype.getUI = function () {
    };
    return SheduleTable;
}(component_1.Component));
exports.SheduleTable = SheduleTable;
