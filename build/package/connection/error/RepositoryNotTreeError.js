"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when repository for the given class is not found.
 */
var RepositoryNotTreeError = (function (_super) {
    __extends(RepositoryNotTreeError, _super);
    function RepositoryNotTreeError(entityClass) {
        var _this = _super.call(this) || this;
        _this.name = "RepositoryNotTreeError";
        var targetName = typeof entityClass === "function" && entityClass.name ? entityClass.name : entityClass;
        _this.message = "Repository of the \"" + targetName + "\" class is not a TreeRepository. Try to use @ClosureTable decorator instead of @Table.";
        _this.stack = new Error().stack;
        return _this;
    }
    return RepositoryNotTreeError;
}(Error));
exports.RepositoryNotTreeError = RepositoryNotTreeError;

//# sourceMappingURL=RepositoryNotTreeError.js.map
