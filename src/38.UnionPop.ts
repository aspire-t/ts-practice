export default {}

// 取出来联合类型中的任意一个类型
export type UnionPop<U> = ((U extends any ? (k: (x: U) => void) => void : never) extends (k: infer I) => void ? I : never) extends ((a: infer A) => void) ? A : never

type a = 1 | 2 | 3
type b = UnionPop<a>       // 3
type A1 = UnionPop<a | any> // any
type A2 = UnionPop<a | never> // 3

// type A = string | number | boolean
// type B = A | any // any
// type C = A | never // A
