"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to recreate connection with the same name, but previous connection was not closed yet.
 */
var AlreadyHasActiveConnectionError = (function (_super) {
    __extends(AlreadyHasActiveConnectionError, _super);
    function AlreadyHasActiveConnectionError(connectionName) {
        var _this = _super.call(this) || this;
        _this.name = "AlreadyHasActiveConnectionError";
        _this.message = "Cannot create a new connection named \"" + connectionName + "\", because connection with such name " +
            "already exist and it now has an active connection session.";
        _this.stack = new Error().stack;
        return _this;
    }
    return AlreadyHasActiveConnectionError;
}(Error));
exports.AlreadyHasActiveConnectionError = AlreadyHasActiveConnectionError;

//# sourceMappingURL=AlreadyHasActiveConnectionError.js.map
