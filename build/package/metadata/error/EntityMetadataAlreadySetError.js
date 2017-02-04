"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Thrown when user tries to execute operation that requires connection to be established.
 */
var EntityMetadataAlreadySetError = (function (_super) {
    __extends(EntityMetadataAlreadySetError, _super);
    function EntityMetadataAlreadySetError(type, target, tableName) {
        var _this = _super.call(this) || this;
        _this.name = "EntityMetadataAlreadySetError";
        var targetMessage = target ? " for " + (target instanceof Function ? target.constructor.name : target) : "";
        var tableNameMessage = tableName ? " with " + tableName + " table name" : "";
        _this.message = "Entity metadata" + targetMessage + tableNameMessage + " has been already set to this " + type.constructor.name;
        return _this;
    }
    return EntityMetadataAlreadySetError;
}(Error));
exports.EntityMetadataAlreadySetError = EntityMetadataAlreadySetError;

//# sourceMappingURL=EntityMetadataAlreadySetError.js.map
