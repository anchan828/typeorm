"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var UsingJoinColumnIsNotAllowedError = (function (_super) {
    __extends(UsingJoinColumnIsNotAllowedError, _super);
    function UsingJoinColumnIsNotAllowedError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "UsingJoinColumnIsNotAllowedError";
        _this.message = "Using JoinColumn on " + entityMetadata.name + "#" + relation.propertyName + " is wrong. " +
            "You can use JoinColumn only on one-to-one and many-to-one relations.";
        return _this;
    }
    return UsingJoinColumnIsNotAllowedError;
}(Error));
exports.UsingJoinColumnIsNotAllowedError = UsingJoinColumnIsNotAllowedError;

//# sourceMappingURL=UsingJoinColumnIsNotAllowedError.js.map
