"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var UsingJoinTableIsNotAllowedError = (function (_super) {
    __extends(UsingJoinTableIsNotAllowedError, _super);
    function UsingJoinTableIsNotAllowedError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "UsingJoinTableIsNotAllowedError";
        _this.message = "Using JoinTable on " + entityMetadata.name + "#" + relation.propertyName + " is wrong. " +
            (entityMetadata.name + "#" + relation.propertyName + " has " + relation.relationType + " relation, ") +
            "however you can use JoinTable only on many-to-many relations.";
        return _this;
    }
    return UsingJoinTableIsNotAllowedError;
}(Error));
exports.UsingJoinTableIsNotAllowedError = UsingJoinTableIsNotAllowedError;

//# sourceMappingURL=UsingJoinTableIsNotAllowedError.js.map
