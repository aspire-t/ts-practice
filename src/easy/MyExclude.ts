export default {}

// 你的答案
export type MyExclude<T, U> = T extends U ? never : T

type A = 'a' | 'b' | 'c'
type B = 'a'

type C = Exclude<A, B> // 'b' | 'c';
