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
                    id: "schedule_date",
                    view: "daterangepicker",
                    format: "%d.%m.%Y",
                    width: 300,
                    label: "Период",
                    on: {
                        onChange: function (date) {
                            if (date) {
                                if (date.end) {
                                    ed.notify("\nс " + date.start.toLocaleDateString() +
                                        "\nпо " + date.end.toLocaleDateString());
                                }
                                else {
                                    // при нажатии clear data.start == null, в этом случае сообщение не выводится
                                    if (date.start) {
                                        ed.notify("выбранная дата " + date.start.toLocaleDateString());
                                    }
                                }
                            }
                        },
                    },
                },
            },
        ];
        return _this;
    }
    DateRangeUI.prototype.init = function () {
        var ed = this.eventDispatcher;
        //@ts-ignore
        $$("$daterangesuggest1_daterange").attachEvent("onDateClear", function () {
            ed.notify("cleared");
        });
    };
    DateRangeUI.prototype.renderUI = function () {
    };
    DateRangeUI.prototype.event = function (e) {
        //@ts-ignore
        webix.message("daterange:\n" + e);
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
