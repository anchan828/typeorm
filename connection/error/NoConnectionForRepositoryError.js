"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when consumer tries to access repository before connection is established.
 */
var NoConnectionForRepositoryError = (function (_super) {
    __extends(NoConnectionForRepositoryError, _super);
    function NoConnectionForRepositoryError(connectionName) {
        var _this = _super.call(this) || this;
        _this.name = "NoConnectionForRepositoryError";
        _this.message = "Cannot get a Repository for \"" + connectionName + " connection, because connection with the database " +
            "is not established yet. Call connection#connect method to establish connection.";
        _this.stack = new Error().stack;
        return _this;
    }
    return NoConnectionForRepositoryError;
}(Error));
exports.NoConnectionForRepositoryError = NoConnectionForRepositoryError;

//# sourceMappingURL=NoConnectionForRepositoryError.js.map
