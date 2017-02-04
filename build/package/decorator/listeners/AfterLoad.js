"use strict";
var index_1 = require("../../index");
var EventListenerTypes_1 = require("../../metadata/types/EventListenerTypes");
/**
 * Calls a method on which this decorator is applied after entity is loaded.
 */
function AfterLoad() {
    return function (object, propertyName) {
        var args = {
            target: object.constructor,
            propertyName: propertyName,
            type: EventListenerTypes_1.EventListenerTypes.AFTER_LOAD
        };
        index_1.getMetadataArgsStorage().entityListeners.add(args);
    };
}
exports.AfterLoad = AfterLoad;

//# sourceMappingURL=AfterLoad.js.map
