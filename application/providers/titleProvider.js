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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleProvider.prototype.init = function () {
        var url = "/metadata/title";
        var data = [];
        this.getJSON(url, function (err, gettingdata) {
            if (JSON.parse(gettingdata).Status == "Succes") {
                data = JSON.parse(gettingdata).Data;
            }
            else {
                return;
            }
        });
        this.data = data;
    };
    TitleProvider.prototype.load = function (id) {
        if (this.data == null) {
            this.init();
        }
        return this.data[id];
    };
    TitleProvider.prototype.update = function () {
    };
    TitleProvider.prototype.getJSON = function (url, callback) {
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
    return TitleProvider;
}(provider_1.Provider));
exports.TitleProvider = TitleProvider;
