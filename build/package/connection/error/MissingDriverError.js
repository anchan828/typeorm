"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer specifies driver type that does not exist or supported.
 */
var MissingDriverError = (function (_super) {
    __extends(MissingDriverError, _super);
    function MissingDriverError(driverType) {
        var _this = _super.call(this) || this;
        _this.name = "MissingDriverError";
        _this.message = "Wrong driver " + driverType + " given. Supported drivers are: \"mysql\", \"postgres\", \"mssql\", \"oracle\", \"mariadb\", \"sqlite\".";
        _this.stack = new Error().stack;
        return _this;
    }
    return MissingDriverError;
}(Error));
exports.MissingDriverError = MissingDriverError;

//# sourceMappingURL=MissingDriverError.js.map
