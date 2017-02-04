"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to connect when he already connected.
 */
var CannotConnectAlreadyConnectedError = (function (_super) {
    __extends(CannotConnectAlreadyConnectedError, _super);
    function CannotConnectAlreadyConnectedError(connectionName) {
        var _this = _super.call(this) || this;
        _this.name = "CannotConnectAlreadyConnectedError";
        _this.message = "Cannot create a \"" + connectionName + "\" connection because connection to the database already established.";
        _this.stack = new Error().stack;
        return _this;
    }
    return CannotConnectAlreadyConnectedError;
}(Error));
exports.CannotConnectAlreadyConnectedError = CannotConnectAlreadyConnectedError;

//# sourceMappingURL=CannotConnectAlreadyConnectedError.js.map
