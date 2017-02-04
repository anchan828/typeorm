"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TargetMetadataArgsCollection_1 = require("./TargetMetadataArgsCollection");
var PropertyMetadataArgsCollection = (function (_super) {
    __extends(PropertyMetadataArgsCollection, _super);
    function PropertyMetadataArgsCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    PropertyMetadataArgsCollection.prototype.filterRepeatedMetadatas = function (existsMetadatas) {
        return this.filter(function (metadata) {
            return !existsMetadatas.find(function (fieldFromDocument) { return fieldFromDocument.propertyName === metadata.propertyName; });
        });
    };
    PropertyMetadataArgsCollection.prototype.findByProperty = function (propertyName) {
        return this.items.find(function (item) { return item.propertyName === propertyName; });
    };
    PropertyMetadataArgsCollection.prototype.hasWithProperty = function (propertyName) {
        return !!this.findByProperty(propertyName);
    };
    return PropertyMetadataArgsCollection;
}(TargetMetadataArgsCollection_1.TargetMetadataArgsCollection));
exports.PropertyMetadataArgsCollection = PropertyMetadataArgsCollection;

//# sourceMappingURL=PropertyMetadataArgsCollection.js.map
