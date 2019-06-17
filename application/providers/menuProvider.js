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
var groupEmployee_1 = require("../entity/groupEmployee");
var MenuProvider = /** @class */ (function (_super) {
    __extends(MenuProvider, _super);
    function MenuProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * возвращает группы с инициалами сотрудников
     */
    MenuProvider.prototype.load = function () {
        var _this = this;
        this.data = [];
        var data = [];
        this.getJSON("/metadata/menu", function (err, gettingdata) {
            if (JSON.parse(gettingdata).Status == "Succes") {
                data = JSON.parse(gettingdata).Data;
            }
            else {
                return;
            }
        });
        data.forEach(function (group) {
            var employees = [];
            group.Employees.forEach(function (emp) {
                employees.push(new groupEmployee_1.GroupEmployee(emp.EID, emp.Lastname, emp.Firstname, emp.Middlename));
            });
            _this.data.push(new group_1.Group(group.GID, employees, group.Name));
        });
        return this.data;
    };
    MenuProvider.prototype.update = function (param) {
    };
    MenuProvider.prototype.getJSON = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    ;
    return MenuProvider;
}(provider_1.Provider));
exports.MenuProvider = MenuProvider;
