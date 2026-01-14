// Convert various text inputs into snake_case
export function toSnakeCase(input) {
  if (input == null) return '';
  const str = String(input).trim();
  if (!str) return '';

  // Handle camelCase boundaries: fooBar -> foo_Bar
  let s = str.replace(/([a-z0-9])([A-Z])/g, '$1_$2');
  // Normalize common separators to underscores
  s = s.replace(/[\s\-./]+/g, '_');
  // Replace any remaining non-alphanumeric/underscore characters with underscores
  s = s.replace(/[^A-Za-z0-9_]+/g, '_');
  // Collapse multiple underscores into one
  s = s.replace(/_+/g, '_');
  // Trim leading/trailing underscores
  s = s.replace(/^_+|_+$/g, '');

  return s.toLowerCase();
}

export default toSnakeCase;
