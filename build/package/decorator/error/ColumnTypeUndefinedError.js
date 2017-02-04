"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ColumnTypeUndefinedError = (function (_super) {
    __extends(ColumnTypeUndefinedError, _super);
    function ColumnTypeUndefinedError(object, propertyName) {
        var _this = _super.call(this) || this;
        _this.name = "ColumnTypeUndefinedError";
        _this.message = "Column type for " + object.constructor.name + "#" + propertyName + " is not defined or cannot be guessed. " +
            "Try to implicitly provide a column type to @Column decorator.";
        return _this;
    }
    return ColumnTypeUndefinedError;
}(Error));
exports.ColumnTypeUndefinedError = ColumnTypeUndefinedError;

//# sourceMappingURL=ColumnTypeUndefinedError.js.map
