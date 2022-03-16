export default {}

type Trim<T extends string> = T

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
