#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var SchemaSyncCommand_1 = require("./commands/SchemaSyncCommand.d");
var SchemaDropCommand_1 = require("./commands/SchemaDropCommand.d");
var QueryCommand_1 = require("./commands/QueryCommand.d");
var EntityCreateCommand_1 = require("./commands/EntityCreateCommand.d");
var MigrationCreateCommand_1 = require("./commands/MigrationCreateCommand.d");
var MigrationRunCommand_1 = require("./commands/MigrationRunCommand.d");
var MigrationRevertCommand_1 = require("./commands/MigrationRevertCommand.d");
var SubscriberCreateCommand_1 = require("./commands/SubscriberCreateCommand.d");
require("yargonaut")
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");
require("yargs")
    .usage("Usage: $0 <command> [options]")
    .command(new SchemaSyncCommand_1.SchemaSyncCommand())
    .command(new SchemaDropCommand_1.SchemaDropCommand())
    .command(new QueryCommand_1.QueryCommand())
    .command(new EntityCreateCommand_1.EntityCreateCommand())
    .command(new SubscriberCreateCommand_1.SubscriberCreateCommand())
    .command(new MigrationCreateCommand_1.MigrationCreateCommand())
    .command(new MigrationRunCommand_1.MigrationRunCommand())
    .command(new MigrationRevertCommand_1.MigrationRevertCommand())
    .demand(1)
    .version(function () { return require("./package.json").version; })
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;

//# sourceMappingURL=cli.js.map
