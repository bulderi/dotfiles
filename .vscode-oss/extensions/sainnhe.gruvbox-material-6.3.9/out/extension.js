"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const path_1 = require("path");
const utils_1 = require("./utils");
function activate() {
    let utils = new utils_1.default();
    // Regenerate theme files when user configuration changes.
    vscode_1.workspace.onDidChangeConfiguration((event) => {
        utils.detectConfigChanges(event, () => {
            utils.generate(path_1.join(__dirname, "..", "themes", "gruvbox-material-dark.json"), path_1.join(__dirname, "..", "themes", "gruvbox-material-light.json"), utils.getThemeData(utils.getConfiguration()));
        });
    });
    // Regenerate theme files if it's newly installed but the user settings are not the default.
    if (utils.isNewlyInstalled() &&
        !utils.isDefaultConfiguration(utils.getConfiguration())) {
        utils.generate(path_1.join(__dirname, "..", "themes", "gruvbox-material-dark.json"), path_1.join(__dirname, "..", "themes", "gruvbox-material-light.json"), utils.getThemeData(utils.getConfiguration()));
    }
    // Register commands.
    vscode_1.commands.registerCommand("gruvboxMaterial.regenerateThemes", () => {
        utils.generate(path_1.join(__dirname, "..", "themes", "gruvbox-material-dark.json"), path_1.join(__dirname, "..", "themes", "gruvbox-material-light.json"), utils.getThemeData(utils.getConfiguration()));
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map