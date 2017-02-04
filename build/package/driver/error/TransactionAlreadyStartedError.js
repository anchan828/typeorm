"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when transaction is already started and user tries to run it again.
 */
var TransactionAlreadyStartedError = (function (_super) {
    __extends(TransactionAlreadyStartedError, _super);
    function TransactionAlreadyStartedError() {
        var _this = _super.call(this) || this;
        _this.name = "TransactionAlreadyStartedError";
        _this.message = "Transaction already started for the given connection, commit current transaction before starting a new one.";
        return _this;
    }
    return TransactionAlreadyStartedError;
}(Error));
exports.TransactionAlreadyStartedError = TransactionAlreadyStartedError;

//# sourceMappingURL=TransactionAlreadyStartedError.js.map
