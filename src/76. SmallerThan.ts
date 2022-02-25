export default {}

// 用于比较数值类型的大小

type SmallerThan<
	N extends number,
	M extends number,
	A extends any[] = []
	> = A['length'] extends M  //=> M = 0 直接返回 false  1 => extends 2 ? false
	? false
	: A['length'] extends N // => if M = 1，那么 N 应该就是 0， so M > N => 1 extends 1 true 
	? true
	: SmallerThan<N, M, [...A, '']> // 否则 A length + 1 

// 测试用例
type S0 = SmallerThan<0, 1> // true
type S1 = SmallerThan<2, 0> // false
type S2 = SmallerThan<8, 10> // true
type S3 = SmallerThan<1, 1> // false
