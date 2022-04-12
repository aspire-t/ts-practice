export default {}

type Chunk<T extends readonly unknown[], N extends number, R extends unknown[] = []> =
	T extends [infer First, ...infer Rest]
	? R extends [...infer Other, [...infer Last]]
	? Last['length'] extends N ? Chunk<Rest, N, [...R, [First]]> : Chunk<Rest, N, [...Other, [...Last, First]]>
	: Chunk<Rest, N, [[First]]>
	: R

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
