export default {}

// 用于对元组类型中元素的位置颠倒，并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。

type Reverse<
	T extends Array<any>,
	K extends Array<any> = []
	> = T extends [infer L, ...infer R] ? [...Reverse<R, K>, L] : []

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
type R2 = Reverse<[1, 2, 3, 4, 5]> //  [5, 4, 3, 2, 1]
