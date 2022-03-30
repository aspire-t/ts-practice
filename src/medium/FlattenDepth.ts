export default {}

type FlattenDepth<T, D extends number = 1, H extends any[] = []> = T extends [infer F, ...infer L] ?
	H["length"] extends D ? T :
	F extends any[]
	? [...FlattenDepth<F, D, [...H, 1]>, ...FlattenDepth<L, D, [...H]>]
	: [F, ...FlattenDepth<L, D, [...H]>]
	: []

// your answers
// type FlattenDepth<T, D = 1, U extends number[] = []> = T extends [infer H, ...infer R]
// 	? (H extends unknown[]
// 		? (U['length'] extends D
// 			? [H, ...FlattenDepth<R, D, U>]
// 			: [...FlattenDepth<H, D, [0, ...U]>, ...FlattenDepth<R, D, U>])
// 		: [H, ...FlattenDepth<R, D, U>])
// 	: T

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
