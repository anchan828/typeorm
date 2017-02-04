"use strict";
var index_1 = require("../index");
/**
 * Used to declare a class as a custom repository.
 * Custom repository can either manage some specific entity, either just be generic.
 * Custom repository can extend AbstractRepository or regular Repository or TreeRepository.
 */
function EntityRepository(entityOrOptions, maybeOptions) {
    var entity = entityOrOptions instanceof Function ? entityOrOptions : undefined;
    var options = entityOrOptions instanceof Function ? maybeOptions : entityOrOptions;
    return function (target) {
        var args = {
            target: target,
            entity: entity,
            useContainer: !!(options && options.useContainer)
        };
        index_1.getMetadataArgsStorage().entityRepositories.add(args);
    };
}
exports.EntityRepository = EntityRepository;

//# sourceMappingURL=EntityRepository.js.map
