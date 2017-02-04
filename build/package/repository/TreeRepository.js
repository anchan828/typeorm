"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Repository_1 = require("./Repository");
/**
 * Repository with additional functions to work with trees.
 *
 * @see Repository
 */
var TreeRepository = (function (_super) {
    __extends(TreeRepository, _super);
    function TreeRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // todo: implement moving
    // todo: implement removing
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Roots are entities that have no ancestors. Finds them all.
     */
    TreeRepository.prototype.findRoots = function () {
        var parentPropertyName = this.metadata.treeParentRelation.propertyName;
        return this.createQueryBuilder("treeEntity")
            .where("treeEntity." + parentPropertyName + " IS NULL")
            .getMany();
    };
    /**
     * Creates a query builder used to get descendants of the entities in a tree.
     */
    TreeRepository.prototype.createDescendantsQueryBuilder = function (alias, closureTableAlias, entity) {
        var _this = this;
        // create shortcuts for better readability
        var escapeAlias = function (alias) { return _this.connection.driver.escapeAliasName(alias); };
        var escapeColumn = function (column) { return _this.connection.driver.escapeColumnName(column); };
        var joinCondition = escapeAlias(alias) + "." + escapeColumn(this.metadata.firstPrimaryColumn.name) + "=" + escapeAlias(closureTableAlias) + "." + escapeColumn("descendant");
        return this.createQueryBuilder(alias)
            .innerJoin(this.metadata.closureJunctionTable.table.name, closureTableAlias, joinCondition)
            .where(escapeAlias(closureTableAlias) + "." + escapeColumn("ancestor") + "=" + this.metadata.getEntityIdMap(entity)[this.metadata.firstPrimaryColumn.propertyName]);
    };
    /**
     * Gets all children (descendants) of the given entity. Returns them all in a flat array.
     */
    TreeRepository.prototype.findDescendants = function (entity) {
        return this
            .createDescendantsQueryBuilder("treeEntity", "treeClosure", entity)
            .getMany();
    };
    /**
     * Gets all children (descendants) of the given entity. Returns them in a tree - nested into each other.
     */
    TreeRepository.prototype.findDescendantsTree = function (entity) {
        var _this = this;
        // todo: throw exception if there is no column of this relation?
        return this
            .createDescendantsQueryBuilder("treeEntity", "treeClosure", entity)
            .getEntitiesAndRawResults()
            .then(function (entitiesAndScalars) {
            var relationMaps = _this.createRelationMaps("treeEntity", entitiesAndScalars.rawResults);
            _this.buildChildrenEntityTree(entity, entitiesAndScalars.entities, relationMaps);
            return entity;
        });
    };
    /**
     * Gets number of descendants of the entity.
     */
    TreeRepository.prototype.countDescendants = function (entity) {
        return this
            .createDescendantsQueryBuilder("treeEntity", "treeClosure", entity)
            .getCount();
    };
    /**
     * Creates a query builder used to get ancestors of the entities in the tree.
     */
    TreeRepository.prototype.createAncestorsQueryBuilder = function (alias, closureTableAlias, entity) {
        var _this = this;
        // create shortcuts for better readability
        var escapeAlias = function (alias) { return _this.connection.driver.escapeAliasName(alias); };
        var escapeColumn = function (column) { return _this.connection.driver.escapeColumnName(column); };
        var joinCondition = escapeAlias(alias) + "." + escapeColumn(this.metadata.firstPrimaryColumn.name) + "=" + escapeAlias(closureTableAlias) + "." + escapeColumn("ancestor");
        return this.createQueryBuilder(alias)
            .innerJoin(this.metadata.closureJunctionTable.table.name, closureTableAlias, joinCondition)
            .where(escapeAlias(closureTableAlias) + "." + escapeColumn("descendant") + "=" + this.metadata.getEntityIdMap(entity)[this.metadata.firstPrimaryColumn.propertyName]);
    };
    /**
     * Gets all parents (ancestors) of the given entity. Returns them all in a flat array.
     */
    TreeRepository.prototype.findAncestors = function (entity) {
        return this
            .createAncestorsQueryBuilder("treeEntity", "treeClosure", entity)
            .getMany();
    };
    /**
     * Gets all parents (ancestors) of the given entity. Returns them in a tree - nested into each other.
     */
    TreeRepository.prototype.findAncestorsTree = function (entity) {
        var _this = this;
        // todo: throw exception if there is no column of this relation?
        return this
            .createAncestorsQueryBuilder("treeEntity", "treeClosure", entity)
            .getEntitiesAndRawResults()
            .then(function (entitiesAndScalars) {
            var relationMaps = _this.createRelationMaps("treeEntity", entitiesAndScalars.rawResults);
            _this.buildParentEntityTree(entity, entitiesAndScalars.entities, relationMaps);
            return entity;
        });
    };
    /**
     * Gets number of ancestors of the entity.
     */
    TreeRepository.prototype.countAncestors = function (entity) {
        return this
            .createAncestorsQueryBuilder("treeEntity", "treeClosure", entity)
            .getCount();
    };
    /**
     * Moves entity to the children of then given entity.
     *
    move(entity: Entity, to: Entity): Promise<void> {
        return Promise.resolve();
    } */
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    TreeRepository.prototype.createRelationMaps = function (alias, rawResults) {
        var _this = this;
        return rawResults.map(function (rawResult) {
            return {
                id: rawResult[alias + "_" + _this.metadata.firstPrimaryColumn.name],
                parentId: rawResult[alias + "_" + _this.metadata.treeParentRelation.name]
            };
        });
    };
    TreeRepository.prototype.buildChildrenEntityTree = function (entity, entities, relationMaps) {
        var _this = this;
        var childProperty = this.metadata.treeChildrenRelation.propertyName;
        var parentEntityId = entity[this.metadata.firstPrimaryColumn.propertyName];
        var childRelationMaps = relationMaps.filter(function (relationMap) { return relationMap.parentId === parentEntityId; });
        var childIds = childRelationMaps.map(function (relationMap) { return relationMap.id; });
        entity[childProperty] = entities.filter(function (entity) { return childIds.indexOf(entity[_this.metadata.firstPrimaryColumn.propertyName]) !== -1; });
        entity[childProperty].forEach(function (childEntity) {
            _this.buildChildrenEntityTree(childEntity, entities, relationMaps);
        });
    };
    TreeRepository.prototype.buildParentEntityTree = function (entity, entities, relationMaps) {
        var _this = this;
        var parentProperty = this.metadata.treeParentRelation.propertyName;
        var entityId = entity[this.metadata.firstPrimaryColumn.propertyName];
        var parentRelationMap = relationMaps.find(function (relationMap) { return relationMap.id === entityId; });
        var parentEntity = entities.find(function (entity) {
            if (!parentRelationMap)
                return false;
            return entity[_this.metadata.firstPrimaryColumn.propertyName] === parentRelationMap.parentId;
        });
        if (parentEntity) {
            entity[parentProperty] = parentEntity;
            this.buildParentEntityTree(entity[parentProperty], entities, relationMaps);
        }
    };
    return TreeRepository;
}(Repository_1.Repository));
exports.TreeRepository = TreeRepository;

//# sourceMappingURL=TreeRepository.js.map
