import { toSnakeCase } from './snakeCase';

describe('toSnakeCase', () => {
  test('converts spaces to underscores and lowercases', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world');
  });

  test('converts camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });

  test('collapses multiple separators', () => {
    expect(toSnakeCase('This is--a Test')).toBe('this_is_a_test');
  });

  test('removes/normalizes special characters', () => {
    expect(toSnakeCase('Special!@#Chars')).toBe('special_chars');
  });

  test('preserves existing snake case', () => {
    expect(toSnakeCase('snake_case')).toBe('snake_case');
  });

  test('trims and lowercases', () => {
    expect(toSnakeCase('  Leading trailing  ')).toBe('leading_trailing');
  });

  test('handles empty and null/undefined', () => {
    expect(toSnakeCase('')).toBe('');
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });
});
