"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to change used naming strategy after connection is established.
 */
var CannotUseNamingStrategyNotConnectedError = (function (_super) {
    __extends(CannotUseNamingStrategyNotConnectedError, _super);
    function CannotUseNamingStrategyNotConnectedError(connectionName) {
        var _this = _super.call(this) || this;
        _this.name = "CannotUseNamingStrategyNotConnectedError";
        _this.message = "Cannot use a given naming strategy for \"" + connectionName + "\" connection because connection to the database already established.";
        _this.stack = new Error().stack;
        return _this;
    }
    return CannotUseNamingStrategyNotConnectedError;
}(Error));
exports.CannotUseNamingStrategyNotConnectedError = CannotUseNamingStrategyNotConnectedError;

//# sourceMappingURL=CannotUseNamingStrategyNotConnectedError.js.map
