export default {}
// 找出E类型在元组类型T中的下标
type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false

export type FindIndex<T extends any[], K> = T extends [...infer L, infer R] ? Equal<R, K> extends true ? L['length'] : FindIndex<L, K> : never

type index1 = FindIndex<[1, string, 2, 3, 5], string>
type index2 = FindIndex<[1, 2, string, 3, 5], string>
type index3 = FindIndex<[1, 2, 3, string, 5], string>
type index4 = FindIndex<[1, 2, 3, 5, string], string>

type A = [any, never, 1, '2', true]

type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never
