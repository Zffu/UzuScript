const expressions = require("../basic/index").expressions;

/**
 * Compiles the basic expression in the provided file content.
 * @param {*} content the provided file content
 * @returns the compiled file content.
 */
function compileBasicExpressions(content) {
    console.log("[INFO] Compiling Basic Expressions...")

    expressions.forEach(expression => {
        content = expression.replaceIn(expression)
    })

    return content;
}
