export default {}

/**
1、A为接收根据C数量，重复T类型以元组形式返回的新类型；

2、判断A的数组长度是否满足C；

3、不满足则继续往里面添加需要重复的T类型；

4、否则返回添加完成的A类型结果。
 */
type Repeat<T, C extends number, A extends any[] = []> = A['length'] extends C ? A : Repeat<T, C, [...A, T]>

type R0 = Repeat<0, 0> // []
type R1 = Repeat<1, 1> // [1]
type R2 = Repeat<number, 2> // [number, number]
