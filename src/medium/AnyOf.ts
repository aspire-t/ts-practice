export default {}

// case one
// type AnyOf<T extends readonly any[]> = T[number] extends 0 | [] | '' | false | { [key: string]: never } ? false : true

// case two
type Falsey = 0 | '' | false | null | undefined | [] | Record<string, never>

type AnyOf<T extends readonly any[]> = T[number] extends Falsey ? false : true

// case three
// type Bool<T> = T extends 1 ? true :
// 	T extends string ? T extends '' ? false : true :
// 	T extends boolean ? T :
// 	T extends any[] ? (T['length'] extends 0 ? false : true) :
// 	T extends object ? (keyof T extends never ? false : true) :
// 	false

// type AnyOf<T extends readonly any[]> = T extends [infer R, ...infer Rest]
// 	? Bool<R> extends true
// 	? true
// 	: AnyOf<Rest>
// 	: false

// A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.
