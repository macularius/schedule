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
        _this.currentID = '';
        _this.UI = new sheduleUI_1.SheduleUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    Shedule.prototype.handleEvent = function (e) {
        this.UI.event(e);
        if (e == "cleared") {
            if (this.currentID != "") {
                this.UI.renderUI(this.provider.load(this.currentID));
            }
        }
        var id = e.slice(7);
        var menuPos = id.slice(0, 1);
        /**
         * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
         */
        if (id != "" && Number(menuPos) == 0 || id.indexOf("_") != -1) {
            this.currentID = id;
            this.UI.renderUI(this.provider.load(this.currentID));
        }
    };
    Shedule.prototype.init = function () {
    };
    Shedule.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    Shedule.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    return Shedule;
}(component_1.Component));
exports.Shedule = Shedule;
