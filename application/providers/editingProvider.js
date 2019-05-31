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
var provider_1 = require("./provider");
var EditingProvider = /** @class */ (function (_super) {
    __extends(EditingProvider, _super);
    function EditingProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditingProvider.prototype.load = function (id) {
        this.data = {
            "1": {
                "mon": { start: "14", end: "18" },
                "tue": { start: "14", end: "18" },
                "wed": { start: "9", end: "18" },
                "thu": { start: "", end: "" },
                "fri": { start: "9", end: "18" },
                "sat": { start: "", end: "" },
                "sun": { start: "", end: "" },
            },
            "2": {
                "mon": { start: "14", end: "18" },
                "tue": { start: "14", end: "18" },
                "wed": { start: "9", end: "18" },
                "thu": { start: "", end: "" },
                "fri": { start: "9", end: "18" },
                "sat": { start: "", end: "" },
                "sun": { start: "", end: "" },
            }
        };
        return this.data[id];
    };
    EditingProvider.prototype.update = function (t_id, day, value) {
        if (value.start != null) {
            this.data[t_id][day].start = value.start;
        }
        if (value.end != null) {
            this.data[t_id][day].end = value.end;
        }
    };
    return EditingProvider;
}(provider_1.Provider));
exports.EditingProvider = EditingProvider;
