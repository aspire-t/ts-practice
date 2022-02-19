export default {}
// 方法一：
type Includes<T extends Array<any>, E> = T extends [infer A, ...infer B] ? A extends E ? true : Includes<B, E> : false
// 方法二：
// type Includes<T extends any[], U> = U extends T[number] ? true : false

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true
