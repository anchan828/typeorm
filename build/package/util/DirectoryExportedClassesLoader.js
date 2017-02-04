"use strict";
var PlatformTools_1 = require("../platform/PlatformTools");
/**
 * Loads all exported classes from the given directory.
 */
function importClassesFromDirectories(directories, formats) {
    if (formats === void 0) { formats = [".js", ".ts"]; }
    function loadFileClasses(exported, allLoaded) {
        if (exported instanceof Function) {
            allLoaded.push(exported);
        }
        else if (exported instanceof Object) {
            Object.keys(exported).forEach(function (key) { return loadFileClasses(exported[key], allLoaded); });
        }
        else if (exported instanceof Array) {
            exported.forEach(function (i) { return loadFileClasses(i, allLoaded); });
        }
        return allLoaded;
    }
    var allFiles = directories.reduce(function (allDirs, dir) {
        return allDirs.concat(PlatformTools_1.PlatformTools.load("glob").sync(PlatformTools_1.PlatformTools.pathNormilize(dir)));
    }, []);
    var dirs = allFiles
        .filter(function (file) {
        var dtsExtension = file.substring(file.length - 5, file.length);
        return formats.indexOf(PlatformTools_1.PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
    })
        .map(function (file) { return PlatformTools_1.PlatformTools.load(PlatformTools_1.PlatformTools.pathResolve(file)); });
    return loadFileClasses(dirs, []);
}
exports.importClassesFromDirectories = importClassesFromDirectories;
/**
 * Loads all json files from the given directory.
 */
function importJsonsFromDirectories(directories, format) {
    if (format === void 0) { format = ".json"; }
    var allFiles = directories.reduce(function (allDirs, dir) {
        return allDirs.concat(PlatformTools_1.PlatformTools.load("glob").sync(PlatformTools_1.PlatformTools.pathNormilize(dir)));
    }, []);
    return allFiles
        .filter(function (file) { return PlatformTools_1.PlatformTools.pathExtname(file) === format; })
        .map(function (file) { return PlatformTools_1.PlatformTools.load(PlatformTools_1.PlatformTools.pathResolve(file)); });
}
exports.importJsonsFromDirectories = importJsonsFromDirectories;

//# sourceMappingURL=DirectoryExportedClassesLoader.js.map
