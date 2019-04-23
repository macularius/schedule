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
var Shedule = /** @class */ (function (_super) {
    __extends(Shedule, _super);
    function Shedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shedule.prototype.handleEvent = function () {
    };
    Shedule.prototype.init = function () {
    };
    Shedule.prototype.makeUI = function () {
    };
    return Shedule;
}(component_1.Component));
exports.Shedule = Shedule;
