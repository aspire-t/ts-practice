export default {}
// 复制类型T为C个元素的元组类型
type Repeat<T, M, TT extends T[] = []> = TT['length'] extends M ? TT : Repeat<T, M, [...TT, T]>

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []