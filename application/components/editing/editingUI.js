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
                view: "scrollview",
                scroll: "auto",
                maxWidth: 788,
                body: {
                    rows: [
                        {
                            view: "form",
                            rows: [
                                {
                                    view: "label",
                                    label: "По дате:",
                                    inputWidth: 100,
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
                                            width: 400,
                                            rows: [
                                                {
                                                    id: "editingDate",
                                                    template: function (obj) {
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
                                                    },
                                                    height: 40,
                                                },
                                                {
                                                    cols: [
                                                        {
                                                            view: "text",
                                                            width: 70,
                                                            labelAlign: "right",
                                                            label: "с",
                                                            labelWidth: 30,
                                                            inputWidth: 70,
                                                        },
                                                        {
                                                            view: "text",
                                                            width: 70,
                                                            labelAlign: "right",
                                                            label: "по",
                                                            labelWidth: 30,
                                                            inputWidth: 70,
                                                        },
                                                    ]
                                                },
                                                {
                                                    cols: [
                                                        {
                                                            gravity: 1,
                                                        },
                                                        {
                                                            gravity: 2,
                                                            cols: [
                                                                {
                                                                    view: "button",
                                                                    id: "editingBtnAccept",
                                                                    value: "Принять",
                                                                    inputWidth: 100
                                                                },
                                                                { gravity: 0.5 },
                                                                {
                                                                    view: "button",
                                                                    id: "editingBtnCancel",
                                                                    value: "Отменить",
                                                                    inputWidth: 100
                                                                }
                                                            ]
                                                        },
                                                    ],
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
                                    view: "label",
                                    label: "Шаблоны:",
                                    inputWidth: 100,
                                },
                                {
                                    view: "datatable",
                                    id: "template table",
                                    scrollY: "auto",
                                    width: 752,
                                    columns: [
                                        { id: "mon", header: "понедельник", width: 105 },
                                        { id: "tue", header: "вторник", width: 105 },
                                        { id: "wed", header: "среда", width: 105 },
                                        { id: "thu", header: "четверг", width: 105 },
                                        { id: "fri", header: "пятница", width: 105 },
                                        { id: "sat", header: "суббота", width: 105 },
                                        { id: "sun", header: "воскресенье", width: 105 },
                                    ],
                                    data: [
                                        {
                                            id: "1",
                                            "mon": "14 - 18",
                                            "tue": "14 - 18",
                                            "wed": "9 - 18",
                                            "thu": "",
                                            "fri": "9 - 18",
                                            "sat": "",
                                            "sun": "",
                                        },
                                        {
                                            id: "2",
                                            "mon": "14 - 18",
                                            "tue": "14 - 18",
                                            "wed": "9 - 18",
                                            "thu": "",
                                            "fri": "9 - 18",
                                            "sat": "",
                                            "sun": "",
                                        },
                                    ] //#TODO data load
                                },
                            ],
                        }
                    ]
                }
            }
        ];
        return _this;
    }
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
