"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 */
var CascadesNotAllowedError = (function (_super) {
    __extends(CascadesNotAllowedError, _super);
    // todo: remove metadata attribute since its present in relation attribute
    function CascadesNotAllowedError(type, metadata, relation) {
        var _this = _super.call(this) || this;
        _this.name = "CascadesNotAllowedError";
        _this.message = "Cascades (" + type + ") are not allowed for the given relation " + metadata.name + "#" + relation.name;
        return _this;
    }
    return CascadesNotAllowedError;
}(Error));
exports.CascadesNotAllowedError = CascadesNotAllowedError;

//# sourceMappingURL=CascadesNotAllowedError.js.map
