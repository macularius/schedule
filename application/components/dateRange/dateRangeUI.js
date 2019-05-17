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
var event_1 = require("../../kernel/event");
var events_1 = require("../../kernel/events");
var DateRangeUI = /** @class */ (function (_super) {
    __extends(DateRangeUI, _super);
    function DateRangeUI(ed) {
        var _this = _super.call(this, ed) || this;
        _this.webixUI = [
            {
                view: "scrollview",
                scroll: false,
                height: 40,
                body: {
                    id: "shedule_date",
                    view: "daterangepicker",
                    format: "%d.%m.%Y",
                    width: 300,
                    label: "Период",
                },
            },
        ];
        return _this;
    }
    DateRangeUI.prototype.init = function () {
        var ed = this.eventDispatcher;
        var context = this;
        //@ts-ignore
        $$("$daterangesuggest1_daterange").attachEvent("onDateClear", function () {
            ed.notify(new event_1.Event(events_1.Events.dateClear, "", context));
        });
        //@ts-ignore
        $$("$button1").attachEvent("onItemClick", function () {
            //@ts-ignore
            var date = $$("shedule_date").getValue();
            ed.notify(new event_1.Event(events_1.Events.calendarDone, date, context));
        });
    };
    DateRangeUI.prototype.renderUI = function () {
    };
    DateRangeUI.prototype.event = function (e) {
        if (e.body.groupId && e.body.employeeId) {
            //@ts-ignore
            $$("shedule_date").setValue("");
        }
        if (e.body.start != null) {
            if (e.body.end == null) {
                //@ts-ignore
                webix.message("daterange:\n" + e.body.start.toLocaleDateString());
            }
            else {
                //@ts-ignore
                webix.message("daterange:\n" + e.body.start.toLocaleDateString() + " - " + e.body.end.toLocaleDateString());
            }
        }
    };
    DateRangeUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    DateRangeUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    return DateRangeUI;
}(UI_1.UI));
exports.DateRangeUI = DateRangeUI;
