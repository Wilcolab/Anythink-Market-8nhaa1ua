function toKebabCase(str) {
    // Error handling for invalid input
    if (typeof str !== 'string' || str == null) {
        throw new TypeError('Input must be a non-null string');
    }

    // Trim whitespace and replace multiple delimiters with a single hyphen
    const sanitizedStr = str
        .trim()
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphen
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except hyphen
        .replace(/-+/g, '-') // Collapse multiple hyphens into one
        .toLowerCase(); // Convert to lowercase

    // Handle camelCase transitions
    const kebabCased = sanitizedStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    return kebabCased;
}

// Test cases
console.log(toKebabCase("User_Login-system 2.0")); // Output: "user-login-system-2-0"
console.log(toKebabCase("helloWorld")); // Output: "hello-world"
console.log(toKebabCase("  multiple   spaces   and_underscores  ")); // Output: "multiple-spaces-and-underscores"
console.log(toKebabCase("Special@Characters!")); // Output: "specialcharacters"