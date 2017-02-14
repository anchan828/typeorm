"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to get connection that does not exist.
 */
var ConnectionNotFoundError = (function (_super) {
    __extends(ConnectionNotFoundError, _super);
    function ConnectionNotFoundError(name) {
        var _this = _super.call(this) || this;
        _this.name = "ConnectionNotFoundError";
        _this.message = "Connection \"" + name + "\" was not found.";
        _this.stack = new Error().stack;
        return _this;
    }
    return ConnectionNotFoundError;
}(Error));
exports.ConnectionNotFoundError = ConnectionNotFoundError;

//# sourceMappingURL=ConnectionNotFoundError.js.map
