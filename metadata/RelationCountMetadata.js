"use strict";
/**
 * Contains all information about entity's relation count.
 */
var RelationCountMetadata = (function () {
    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------
    function RelationCountMetadata(args) {
        this.target = args.target;
        this.propertyName = args.propertyName;
        this.relation = args.relation;
    }
    return RelationCountMetadata;
}());
exports.RelationCountMetadata = RelationCountMetadata;

//# sourceMappingURL=RelationCountMetadata.js.map
