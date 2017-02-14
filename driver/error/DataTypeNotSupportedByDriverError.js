"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown if some data type is not supported by a driver.
 */
var DataTypeNotSupportedByDriverError = (function (_super) {
    __extends(DataTypeNotSupportedByDriverError, _super);
    function DataTypeNotSupportedByDriverError(dataType, driverName) {
        var _this = _super.call(this) || this;
        _this.name = "DataTypeNotSupportedByDriverError";
        _this.message = "Specified type (" + dataType + ") is not supported by " + driverName + " driver.";
        return _this;
    }
    return DataTypeNotSupportedByDriverError;
}(Error));
exports.DataTypeNotSupportedByDriverError = DataTypeNotSupportedByDriverError;

//# sourceMappingURL=DataTypeNotSupportedByDriverError.js.map
