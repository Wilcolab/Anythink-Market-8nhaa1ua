/**
 * Converts a given string to camel case format.
 * 
 * Camel case format capitalizes the first letter of each word except for the first word,
 * which is in lowercase. Words are separated by spaces, hyphens, or underscores.
 * 
 * @param {string} input - The input string to be converted to camel case.
 * @throws {TypeError} Throws an error if the input is null, undefined, or not a string.
 * @returns {string} The camel case formatted string. Returns an empty string if the input is empty or contains only whitespace.
 * 
 * @example
 * // returns 'helloWorld'
 * toCamelCase('hello world');
 * 
 * @example
 * // returns 'myVariableName'
 * toCamelCase('my_variable_name');
 */

/**
 * Converts a given string to dot case format.
 * 
 * Dot case format joins words with a dot and converts all characters to lowercase.
 * Words are separated by spaces, hyphens, or underscores.
 * 
 * @param {string} input - The input string to be converted to dot case.
 * @throws {TypeError} Throws an error if the input is null, undefined, or not a string.
 * @returns {string} The dot case formatted string. Returns an empty string if the input is empty or contains only whitespace.
 * 
 * @example
 * // returns 'hello.world'
 * toDotCase('Hello World');
 * 
 * @example
 * // returns 'my.variable.name'
 * toDotCase('my-variable-name');
 */
function toCamelCase(input) {
    // Strict error handling for null, undefined, and non-string types
    if (input === null || input === undefined) {
        throw new TypeError('Input cannot be null or undefined');
    }
    
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }
    
    // Trim leading and trailing whitespace
    const trimmed = input.trim();
    
    // Split by spaces, hyphens, and underscores, filter out empty strings
    const words = trimmed.split(/[\s\-_]+/).filter(word => word.length > 0);
    
    // Handle empty string case
    if (words.length === 0) {
        return '';
    }
    
    // Convert first word to lowercase, capitalize first letter of subsequent words
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

module.exports = toCamelCase;
function toDotCase(input) {
    // Strict error handling for null, undefined, and non-string types
    if (input === null || input === undefined) {
        throw new TypeError('Input cannot be null or undefined');
    }
    
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }
    
    // Trim leading and trailing whitespace
    const trimmed = input.trim();
    
    // Split by spaces, hyphens, and underscores, filter out empty strings
    const words = trimmed.split(/[\s\-_]+/).filter(word => word.length > 0);
    
    // Handle empty string case
    if (words.length === 0) {
        return '';
    }
    
    // Join words with a dot and convert to lowercase
    return words.map(word => word.toLowerCase()).join('.');
}

module.exports.toDotCase = toDotCase;
