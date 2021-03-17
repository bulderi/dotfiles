"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorfulSemantic = void 0;
function getColorfulSemantic(palette) {
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
        "namespace:typescript": `${palette.purple}`,
        "enumMember:typescript": `${palette.yellow}`,
        "variable.defaultLibrary:typescript": `${palette.purple}`,
        "property.defaultLibrary:typescript": `${palette.purple}`,
        // }}}
        // TypeScript React {{{
        "namespace:typescriptreact": `${palette.purple}`,
        "enumMember:typescriptreact": `${palette.yellow}`,
        "variable.defaultLibrary:typescriptreact": `${palette.purple}`,
        "property.defaultLibrary:typescriptreact": `${palette.purple}`,
    };
}
exports.getColorfulSemantic = getColorfulSemantic;
//# sourceMappingURL=colorful.js.map