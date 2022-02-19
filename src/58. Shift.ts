export default {}

type Shift<T extends any[]> = T extends [infer A, ...infer B] ? B : []

// 测试用例
type S0 = Shift<[1, 2, 3]> // [2, 3]
type S1 = Shift<[string, number, boolean]> // [number, boolean]
type S2 = Shift<[never]> // []
