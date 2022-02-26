export default {}

type Flat<T extends any[]> = T extends [infer First, ...infer Rest]
	? First extends any[]
	? [...Flat<First>, ...Flat<Rest>]
	: [First, ...Flat<Rest>]
	: []

type F0 = Flat<[]> // []
type F1 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F2 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]
