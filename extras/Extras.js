"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDE = void 0;
var IDE = /** @class */ (function () {
    function IDE(message) {
        this.message = message;
    }
    IDE.prototype.getTypesCommad = function () {
        return this.message;
    };
    return IDE;
}());
exports.IDE = IDE;
