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
var TitleProvider = /** @class */ (function (_super) {
    __extends(TitleProvider, _super);
    function TitleProvider() {
        return _super.call(this, {
            "1_1": "Иванов Иван Иванович",
            "1_2": "Петров Петр Петрович",
            "2_1": "Сидоров Сидр Сидорович",
            "2_2": "Федоров Федр Федорович",
        }) || this;
    }
    TitleProvider.prototype.load = function (id) {
        return [this.data[id]];
    };
    TitleProvider.prototype.update = function () {
    };
    return TitleProvider;
}(provider_1.Provider));
exports.TitleProvider = TitleProvider;
