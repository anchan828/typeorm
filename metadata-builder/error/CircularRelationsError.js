"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when circular relations detected with nullable set to false.
 */
var CircularRelationsError = (function (_super) {
    __extends(CircularRelationsError, _super);
    function CircularRelationsError(path) {
        var _this = _super.call(this, "Circular relations detected: " + path + ". To resolve this issue you need to set nullable: false somewhere in this dependency structure.") || this;
        _this.name = "CircularRelationsError";
        return _this;
    }
    return CircularRelationsError;
}(Error));
exports.CircularRelationsError = CircularRelationsError;

//# sourceMappingURL=CircularRelationsError.js.map
