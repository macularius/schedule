"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = require("../entity/group");
var employ_1 = require("../entity/employ");
var MenuProvider = /** @class */ (function () {
    function MenuProvider() {
        this.data = [
            new group_1.Group("1", [
                new employ_1.Employ(1, "Иван", "Иванов", "Иванович", "birthday", "position", "email", "phone number"),
                new employ_1.Employ(2, "Петр", "Петров", "Петрович", "birthday", "position", "email", "phone number"),
            ]),
            new group_1.Group("2", [
                new employ_1.Employ(3, "Сидор", "Сидоров", "Сидорович", "birthday", "position", "email", "phone number"),
                new employ_1.Employ(2, "Федор", "Федоров", "Федорович", "birthday", "position", "email", "phone number"),
            ]),
        ];
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
}());
exports.MenuProvider = MenuProvider;
