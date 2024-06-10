const {BasicExpression} = require("./index")

const logExpression = new BasicExpression(["log", "info", "print"], "console.log")

const warnExpression = new BasicExpression(["warn", "warning"], "console.warn")

const errorExpression = new BasicExpression("err", "error", "critical", "console.error")

module.exports = {logExpression, warnExpression, errorExpression}