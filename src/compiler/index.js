const fs = require("node:fs")
const expressions = require("../basic/index").expressions;

/**
 * Compiles the basic expression in the provided file content.
 * @param {string} content the provided file content
 * @returns the compiled file content.
 */
function compileBasicExpressions(content) {
    console.log("[INFO] Compiling Basic Expressions...")

    expressions.forEach(expression => {
        content = expression.replaceIn(expression)
    })

    return content;
}

/**
 * Compiles the file located at the provided path.
 * @param {string} filePath 
 */
function compileFile(filePath) {
    if(!fs.existsSync(filePath)) {
        console.error("[ERROR] The file " + filePath + " could not be found!")
    }
    else {
        fs.open(filePath, "r", (err, fd) => {
            let content = fd;
            content = compileBasicExpressions(content);


            fs.writeFileSync(path, content);
        })
    }
}