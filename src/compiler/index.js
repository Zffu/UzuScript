const expressions = require("../basic/index").expressions;

function performBasicExpressions(content) {
    console.log("[INFO] Compiling Basic Expressions...")

    expressions.forEach(expression => {
        content = expression.replaceIn(expression)
    })

    return content;
}