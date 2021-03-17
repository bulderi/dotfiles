"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultSemantic = void 0;
function getDefaultSemantic(palette) {
    return {
        // JavaScript {{{
        "variable.defaultLibrary:javascript": `${palette.purple}`,
        "property.defaultLibrary:javascript": `${palette.purple}`,
        // }}}
        // JavaScript React {{{
        "variable.defaultLibrary:javascriptreact": `${palette.purple}`,
        "property.defaultLibrary:javascriptreact": `${palette.purple}`,
        // }}}
        // TypeScript {{{
        "class:typescript": `${palette.aqua}`,
        "interface:typescript": `${palette.aqua}`,
        "enum:typescript": `${palette.purple}`,
        "enumMember:typescript": `${palette.blue}`,
        "namespace:typescript": `${palette.purple}`,
        "variable.defaultLibrary:typescript": `${palette.purple}`,
        "property.defaultLibrary:typescript": `${palette.purple}`,
        // }}}
        // TypeScript React {{{
        "class:typescriptreact": `${palette.aqua}`,
        "interface:typescriptreact": `${palette.aqua}`,
        "enum:typescriptreact": `${palette.purple}`,
        "enumMember:typescriptreact": `${palette.blue}`,
        "namespace:typescriptreact": `${palette.purple}`,
        "variable.defaultLibrary:typescriptreact": `${palette.purple}`,
        "property.defaultLibrary:typescriptreact": `${palette.purple}`,
    };
}
exports.getDefaultSemantic = getDefaultSemantic;
//# sourceMappingURL=default.js.map