"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrimaryColumnCannotBeNullableError = (function (_super) {
    __extends(PrimaryColumnCannotBeNullableError, _super);
    function PrimaryColumnCannotBeNullableError(object, propertyName) {
        var _this = _super.call(this) || this;
        _this.name = "PrimaryColumnCannotBeNullableError";
        _this.message = "Primary column " + object.constructor.name + "#" + propertyName + " cannot be nullable. " +
            "Its not allowed for primary keys. Try to remove nullable option.";
        return _this;
    }
    return PrimaryColumnCannotBeNullableError;
}(Error));
exports.PrimaryColumnCannotBeNullableError = PrimaryColumnCannotBeNullableError;

//# sourceMappingURL=PrimaryColumnCannotBeNullableError.js.map
