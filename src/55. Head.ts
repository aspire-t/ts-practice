export default {}

type Head<T extends Array<any>> = T extends [infer A, ...infer B] ?  A :never


// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
type H3 = Head<["a", "b", "c"]> // "a"
type H4 = Head<[undefined, "b", "c"]> // undefined
type H5 = Head<[null, "b", "c"]> // null
