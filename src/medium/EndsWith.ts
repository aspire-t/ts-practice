export default {}

// your answers
type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false

type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'ab'> // expected to be false
type c = EndsWith<'abc', 'abc'> // expected to be true
