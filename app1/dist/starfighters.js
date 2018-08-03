"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var millennionfalcon = /** @class */ (function (_super) {
    __extends(millennionfalcon, _super);
    function millennionfalcon() {
        var _this = _super.call(this, "coisa") || this;
        _this.cargo = 1;
        return _this;
    }
    millennionfalcon.prototype.jump = function () {
    };
    return millennionfalcon;
}(base_ships_1.spacecraft));
exports.millennionfalcon = millennionfalcon;
