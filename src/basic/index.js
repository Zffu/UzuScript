/**
 * A Basic Expression that is contained trough the UzuScript Framework.
 * Used to replace "shortened" expressions like log.
 */
class BasicExpression {
    constructor(origins, replacement) {
        this.origins = origins;
        this.replacement = replacement;
    }

    /**
     * Replaces the expression into the provided string.
     * @param {*} string 
     */
    replaceIn(string) {
        this.origins.forEach(origin => {
            string = string.replaceAll(origin, this.replacement)
        });
        return string;
    }

}