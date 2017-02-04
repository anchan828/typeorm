"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown if database driver does not support pooling.
 */
var DriverPoolingNotSupportedError = (function (_super) {
    __extends(DriverPoolingNotSupportedError, _super);
    function DriverPoolingNotSupportedError(driverName) {
        var _this = _super.call(this) || this;
        _this.name = "DriverPoolingNotSupportedError";
        _this.message = "Connection pooling is not supported by (" + driverName + ") driver.";
        return _this;
    }
    return DriverPoolingNotSupportedError;
}(Error));
exports.DriverPoolingNotSupportedError = DriverPoolingNotSupportedError;

//# sourceMappingURL=DriverPoolingNotSupportedError.js.map
