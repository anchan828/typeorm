"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var MetadataWithSuchNameAlreadyExistsError = (function (_super) {
    __extends(MetadataWithSuchNameAlreadyExistsError, _super);
    function MetadataWithSuchNameAlreadyExistsError(metadataType, name) {
        var _this = _super.call(this) || this;
        _this.name = "MetadataWithSuchNameAlreadyExistsError";
        _this.message = metadataType + " metadata with such name " + name + " already exists. " +
            "Do you apply decorator twice? Or maybe try to change a name?";
        return _this;
    }
    return MetadataWithSuchNameAlreadyExistsError;
}(Error));
exports.MetadataWithSuchNameAlreadyExistsError = MetadataWithSuchNameAlreadyExistsError;

//# sourceMappingURL=MetadataWithSuchNameAlreadyExistsError.js.map
