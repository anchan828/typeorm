"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var QueryRunnerAlreadyReleasedError = (function (_super) {
    __extends(QueryRunnerAlreadyReleasedError, _super);
    function QueryRunnerAlreadyReleasedError() {
        var _this = _super.call(this) || this;
        _this.name = "QueryRunnerAlreadyReleasedError";
        _this.message = "Query runner already released. Cannot run queries anymore.";
        return _this;
    }
    return QueryRunnerAlreadyReleasedError;
}(Error));
exports.QueryRunnerAlreadyReleasedError = QueryRunnerAlreadyReleasedError;

//# sourceMappingURL=QueryRunnerAlreadyReleasedError.js.map
