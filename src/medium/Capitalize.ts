export default {}

type Capitalize<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T

// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
