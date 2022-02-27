export default {}

// 用于获取数组类型中指定项的索引值。若不存在的话，则返回-1字面量类型

type IndexOf<A extends any[], Item, K extends any[] = []> =
	A extends [infer L, ...infer R]
	? Item extends L
	? K['length']
	: IndexOf<R, Item, [...K, L]>
	: -1

type Arr = [1, 2, 3, 4, 5]
type I0 = IndexOf<Arr, 0> // -1
type I1 = IndexOf<Arr, 1> // 0
type I2 = IndexOf<Arr, 3> // 2
