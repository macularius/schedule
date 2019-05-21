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
                id: "edit",
                rows: [
                    {
                        rows: [
                            {
                                template: "По дате:",
                                height: 40,
                            },
                            {
                                cols: [
                                    {
                                        id: "editingCalendar",
                                        view: "calendar",
                                        weekHeader: true,
                                    },
                                    {
                                        view: "form",
                                        rows: [
                                            {
                                                id: "editingDate",
                                                template: _this.format,
                                                height: 40,
                                            },
                                            {
                                                cols: [
                                                    {
                                                        view: "text",
                                                        label: "с",
                                                    },
                                                    {
                                                        view: "text",
                                                        label: "по",
                                                    },
                                                ]
                                            },
                                            {
                                                cols: [
                                                    {
                                                        view: "button",
                                                        id: "editingBtnAccept",
                                                        value: "Принять",
                                                        inputWidth: 100
                                                    },
                                                    {
                                                        view: "button",
                                                        id: "editingBtnCancel",
                                                        value: "Отменить",
                                                        inputWidth: 100
                                                    },
                                                ],
                                            },
                                            {
                                                template: "",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        view: "form",
                        rows: [
                            {
                                template: "Шаблон",
                                height: 40,
                            },
                            {
                                rows: [
                                    {
                                        cols: [
                                            { template: "пн", height: 40 },
                                            { template: "вт", height: 40 },
                                            { template: "ср", height: 40 },
                                            { template: "чт", height: 40 },
                                            { template: "пт", height: 40 },
                                            { template: "сб", height: 40 },
                                            { template: "вс", height: 40 },
                                        ],
                                    },
                                    {
                                        cols: [
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                        ],
                                    }
                                ],
                            },
                        ],
                    }
                ],
            }
        ];
        return _this;
    }
    EditingUI.prototype.format = function (obj) {
        if (obj.value) {
            //@ts-ignore
            if (webix.isArray(obj.value)) {
                //@ts-ignore
                return obj.value.map(webix.i18n.dateFormatStr).join("<br>");
            }
            //@ts-ignore
            return webix.i18n.dateFormatStr(obj.value);
        }
        return "";
    };
    ;
    EditingUI.prototype.init = function () {
    };
    EditingUI.prototype.renderUI = function () {
        //@ts-ignore
        if ($$("edit") == null) {
            //@ts-ignore
            $$("shedule table").addView(this.webixUI[0]);
            //@ts-ignore
            $$("editingCalendar").selectDate(Date.now());
            //@ts-ignore
            $$("editingDate").bind($$("editingCalendar"), "value");
        }
    };
    EditingUI.prototype.event = function (e) {
    };
    EditingUI.prototype.getWebixUI = function () {
        return this.webixUI;
    };
    EditingUI.prototype.getEventDispatcher = function () {
        return this.eventDispatcher;
    };
    EditingUI.prototype.destroy = function () {
        //@ts-ignore
        $$("shedule table").removeView("edit");
    };
    return EditingUI;
}(UI_1.UI));
exports.EditingUI = EditingUI;
