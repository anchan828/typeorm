"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var UsingJoinTableOnlyOnOneSideAllowedError = (function (_super) {
    __extends(UsingJoinTableOnlyOnOneSideAllowedError, _super);
    function UsingJoinTableOnlyOnOneSideAllowedError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "UsingJoinTableOnlyOnOneSideAllowedError";
        _this.message = "Using JoinTable is allowed only on one side of the many-to-many relationship. " +
            ("Both " + entityMetadata.name + "#" + relation.propertyName + " and " + relation.inverseEntityMetadata.name + "#" + relation.inverseRelation.propertyName + " ") +
            "has JoinTable decorators. Choose one of them and left JoinColumn decorator only on it.";
        return _this;
    }
    return UsingJoinTableOnlyOnOneSideAllowedError;
}(Error));
exports.UsingJoinTableOnlyOnOneSideAllowedError = UsingJoinTableOnlyOnOneSideAllowedError;

//# sourceMappingURL=UsingJoinTableOnlyOnOneSideAllowedError.js.map
