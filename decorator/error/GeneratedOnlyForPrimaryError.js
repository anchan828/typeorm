"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GeneratedOnlyForPrimaryError = (function (_super) {
    __extends(GeneratedOnlyForPrimaryError, _super);
    function GeneratedOnlyForPrimaryError(object, propertyName) {
        var _this = _super.call(this) || this;
        _this.name = "GeneratedOnlyForPrimaryError";
        _this.message = "Column for property " + object.constructor.name + "#" + propertyName + " cannot have a generated " +
            "value because its not a primary column. Try to use @PrimaryColumn decorator.";
        return _this;
    }
    return GeneratedOnlyForPrimaryError;
}(Error));
exports.GeneratedOnlyForPrimaryError = GeneratedOnlyForPrimaryError;

//# sourceMappingURL=GeneratedOnlyForPrimaryError.js.map
