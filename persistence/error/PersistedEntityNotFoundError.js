"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown . Theoretically can't be thrown.
 */
var PersistedEntityNotFoundError = (function (_super) {
    __extends(PersistedEntityNotFoundError, _super);
    function PersistedEntityNotFoundError() {
        var _this = _super.call(this) || this;
        _this.name = "PersistedEntityNotFoundError";
        _this.message = "Internal error. Persisted entity was not found in the list of prepared operated entities.";
        return _this;
    }
    return PersistedEntityNotFoundError;
}(Error));
exports.PersistedEntityNotFoundError = PersistedEntityNotFoundError;

//# sourceMappingURL=PersistedEntityNotFoundError.js.map
