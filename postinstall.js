/* eslint-disable max-len */
var fs = require('fs');
var path = require('path');

var COLOR = !!process.env.npm_config_color;

function main() {
    if (isInstalledAsPackage()) copyCartridgeFilesToProject();
}

function isInstalledAsPackage() {
    return process.cwd() !== __dirname;
}

function copyCartridgeFilesToProject() {
    logMessage('** Installing cartridge files from to current project...');
    var src = [__dirname, 'cartridges'].join(path.sep);
    var dest = [process.cwd(), 'cartridges'].join(path.sep);

    logMessage('  source: ' + src);
    logMessage('  destination: ' + dest);

    if (fs.existsSync(src) && fs.existsSync(dest)) {
        copyRecursiveSync(src, dest);
        logMessage('** ϞϞ(๑⚈‿‿⚈๑)∩ - Done!!');
    } else {
        logMessage('Source or destination folder not found. Cannot install cartridge files to project.');
    }
}

function copyRecursiveSync(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

function logMessage(message) {
    // eslint-disable-next-line no-console
    console.log(COLOR ? '\u001B[96m' + message + '\u001B[0m\n' : message);
}

main();
