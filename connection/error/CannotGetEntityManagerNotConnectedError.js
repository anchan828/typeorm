"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to access entity manager before connection is established.
 */
var CannotGetEntityManagerNotConnectedError = (function (_super) {
    __extends(CannotGetEntityManagerNotConnectedError, _super);
    function CannotGetEntityManagerNotConnectedError(connectionName) {
        var _this = _super.call(this) || this;
        _this.name = "CannotGetEntityManagerNotConnectedError";
        _this.message = "Cannot get entity manager for \"" + connectionName + "\" connection because connection is not yet established.";
        _this.stack = new Error().stack;
        return _this;
    }
    return CannotGetEntityManagerNotConnectedError;
}(Error));
exports.CannotGetEntityManagerNotConnectedError = CannotGetEntityManagerNotConnectedError;

//# sourceMappingURL=CannotGetEntityManagerNotConnectedError.js.map
