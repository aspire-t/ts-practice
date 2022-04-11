export default {}

// your answers
type IsTuple<T> = T extends readonly unknown[] ? (number extends T['length'] ? false : true) : false

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false
