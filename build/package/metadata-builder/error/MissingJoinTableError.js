"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var MissingJoinTableError = (function (_super) {
    __extends(MissingJoinTableError, _super);
    function MissingJoinTableError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "MissingJoinTableError";
        if (relation.hasInverseSide) {
            _this.message = "JoinTable is missing on both sides of " + entityMetadata.name + "#" + relation.propertyName + " and " +
                (relation.inverseEntityMetadata.name + "#" + relation.inverseRelation.propertyName + " many-to-many relationship. ") +
                "You need to put decorator decorator on one of the sides.";
        }
        else {
            _this.message = "JoinTable is missing on " + entityMetadata.name + "#" + relation.propertyName + " many-to-many relationship. " +
                "You need to put JoinTable decorator on it.";
        }
        return _this;
    }
    return MissingJoinTableError;
}(Error));
exports.MissingJoinTableError = MissingJoinTableError;

//# sourceMappingURL=MissingJoinTableError.js.map
