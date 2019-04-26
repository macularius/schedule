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
var group_1 = require("../entity/group");
var employ_1 = require("../entity/employ");
var MenuProvider = /** @class */ (function (_super) {
    __extends(MenuProvider, _super);
    function MenuProvider() {
        return _super.call(this, [
            new group_1.Group("1", [
                new employ_1.Employ(1, "Иванов", "Иван", "Иванович", "birthday", "position", "email", "phone number"),
                new employ_1.Employ(2, "Петров", "Петр", "Петрович", "birthday", "position", "email", "phone number"),
            ]),
            new group_1.Group("2", [
                new employ_1.Employ(3, "Сидоров", "Сидор", "Сидорович", "birthday", "position", "email", "phone number"),
                new employ_1.Employ(2, "Федоров", "Федор", "Федорович", "birthday", "position", "email", "phone number"),
            ]),
        ]) || this;
    }
    /**
     * возвращает группы с инициалами сотрудников
     */
    MenuProvider.prototype.load = function () {
        return this.data;
    };
    MenuProvider.prototype.update = function (param) {
    };
    return MenuProvider;
}(provider_1.Provider));
exports.MenuProvider = MenuProvider;
