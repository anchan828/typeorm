"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when some unexpected error occur on driver packages load.
 */
var DriverPackageLoadError = (function (_super) {
    __extends(DriverPackageLoadError, _super);
    function DriverPackageLoadError() {
        var _this = _super.call(this) || this;
        _this.name = "DriverPackageLoadError";
        _this.message = "Cannot load driver dependencies. Try to install all required dependencies.";
        return _this;
    }
    return DriverPackageLoadError;
}(Error));
exports.DriverPackageLoadError = DriverPackageLoadError;

//# sourceMappingURL=DriverPackageLoadError.js.map
