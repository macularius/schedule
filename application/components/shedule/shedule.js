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
var events_1 = require("../../kernel/events");
var Shedule = /** @class */ (function (_super) {
    __extends(Shedule, _super);
    function Shedule() {
        var _this = _super.call(this, new sheduleProvider_1.SheduleProvider()) || this;
        _this.currentID = '';
        _this.UI = new sheduleUI_1.SheduleUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    Shedule.prototype.handleEvent = function (e) {
        switch (e.type) {
            case events_1.Events.calendarDone:
                if (this.currentID != "") {
                    // this.UI.renderUI(this.provider.loadWithDate(this.currentID, date));
                }
                break;
            case events_1.Events.dateClear:
                if (this.currentID != "") {
                    this.UI.renderUI(this.provider.load(this.currentID));
                }
                // console.log("[shedule, dateClear]", e.body, e.context, e.type);
                break;
            /**
             * обновление расписания по нажатию кнопки меню
             */
            case events_1.Events.menuItemClick:
                var id = e.body.slice(7);
                var menuPos = id.slice(0, 1);
                /**
                 * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                 */
                if (id != "" && Number(menuPos) == 0 || id.indexOf("_") != -1) {
                    this.currentID = id;
                    this.UI.renderUI(this.provider.load(this.currentID));
                }
                // console.log("[shedule, menuItemClick]", e.body, e.context, e.type);
                break;
            default:
                break;
        }
        // if (e.indexOf("обновление расписания") != -1) {
        // }
    };
    Shedule.prototype.init = function () {
    };
    Shedule.prototype.getUI = function () {
        return this.UI.getWebixUI();
    };
    Shedule.prototype.subscribeOnUI = function (e) {
        this.UI.getEventDispatcher().subscribe(e);
    };
    Shedule.prototype.getProvider = function () {
        return this.provider;
    };
    return Shedule;
}(component_1.Component));
exports.Shedule = Shedule;
