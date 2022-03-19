export default {}

type Flatten<T, U extends any[] = []> =
	T extends [infer L, ...infer R]
	? L extends any[] // 如果 L 还是 数组， 就需要继续去flat
	// 重点就是这个一步 ...Flatten<L>, 不需要写成...Flatten<L, U>，因为这样, 会展开多余的值
	? Flatten<R, [...U, ...Flatten<L>]>
	: Flatten<R, [...U, L]>
	: U

// 改进版，没有多余参数
type BetterFlatten<T extends unknown[] = []> =
	T extends [infer First, ...infer Rest]
	? First extends any[]
	? [...BetterFlatten<First>, ...BetterFlatten<Rest>]
	: [First, ...BetterFlatten<Rest>]
	: T

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
