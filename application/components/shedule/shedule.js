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
        _this.provider = new sheduleProvider_1.SheduleProvider();
        _this.currentID = "0";
        _this.UI = new sheduleUI_1.SheduleUI(new eventDispatcher_1.EventDispatcher([_this]));
        return _this;
    }
    Shedule.prototype.switch = function (status) {
        if (status) {
            //@ts-ignore
            $$("shedule table shedule").show();
        }
        else {
            //@ts-ignore
            $$("shedule table shedule").hide();
        }
    };
    Shedule.prototype.handleEvent = function (e) {
        switch (e.type) {
            case events_1.Events.calendarDone:
                if (e.body.start != null) {
                    if (this.currentID != null) {
                        var date = {
                            start: e.body.start,
                            end: e.body.end
                        };
                        this.UI.renderUI(this.provider.load(this.currentID, date), 0);
                        this.UI.init();
                    }
                }
                break;
            case events_1.Events.dateClear:
                if (this.currentID != "") {
                    this.UI.renderUI(this.provider.load(this.currentID), 0);
                    this.UI.init();
                }
                break;
            /**
             * обновление расписания по нажатию кнопки меню
             */
            case events_1.Events.menuItemClick:
                var id = void 0, menuPos = void 0;
                /**
                 * если расписание сотрудника, то указывать группу
                 * иначе мое расписание
                 *
                 * только "мое расписание" не имеет группы
                 */
                if (e.body.context != "shedule") {
                    this.switch(false);
                }
                if (e.body.context == "shedule") {
                    this.switch(true);
                    if (e.body.groupId != "") {
                        id = e.body.employeeId;
                        menuPos = e.body.groupId;
                    }
                    else {
                        id = e.body.employeeId;
                        menuPos = e.body.groupId;
                    }
                    /**
                     * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                     */
                    if ((Number(menuPos) == 0 || id != -1)) {
                        this.currentID = id;
                        this.UI.renderUI(this.provider.load(this.currentID), 0);
                        this.UI.init();
                    }
                }
                break;
            case events_1.Events.itemCnahge:
                this.provider.update(e.body.value, e.body.editor, this.currentID);
                break;
            default:
                break;
        }
        // if (e.indexOf("обновление расписания") != -1) {
        // }
    };
    Shedule.prototype.init = function () {
        this.UI.renderUI(this.provider.load("init", null));
        this.UI.init();
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
