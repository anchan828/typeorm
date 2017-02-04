"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when repository for the given class is not found.
 */
var RepositoryNotFoundError = (function (_super) {
    __extends(RepositoryNotFoundError, _super);
    function RepositoryNotFoundError(connectionName, entityClass) {
        var _this = _super.call(this) || this;
        _this.name = "RepositoryNotFoundError";
        var targetName = typeof entityClass === "function" && entityClass.name ? entityClass.name : entityClass;
        _this.message = "No repository for \"" + targetName + "\" was found. Looks like this entity is not registered in " +
            ("current \"" + connectionName + "\" connection?");
        _this.stack = new Error().stack;
        return _this;
    }
    return RepositoryNotFoundError;
}(Error));
exports.RepositoryNotFoundError = RepositoryNotFoundError;

//# sourceMappingURL=RepositoryNotFoundError.js.map
