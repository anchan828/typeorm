"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var UsingJoinColumnOnlyOnOneSideAllowedError = (function (_super) {
    __extends(UsingJoinColumnOnlyOnOneSideAllowedError, _super);
    function UsingJoinColumnOnlyOnOneSideAllowedError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "UsingJoinColumnOnlyOnOneSideAllowedError";
        _this.message = "Using JoinColumn is allowed only on one side of the one-to-one relationship. " +
            ("Both " + entityMetadata.name + "#" + relation.propertyName + " and " + relation.inverseEntityMetadata.name + "#" + relation.inverseRelation.propertyName + " ") +
            "has JoinTable decorators. Choose one of them and left JoinTable decorator only on it.";
        return _this;
    }
    return UsingJoinColumnOnlyOnOneSideAllowedError;
}(Error));
exports.UsingJoinColumnOnlyOnOneSideAllowedError = UsingJoinColumnOnlyOnOneSideAllowedError;

//# sourceMappingURL=UsingJoinColumnOnlyOnOneSideAllowedError.js.map
