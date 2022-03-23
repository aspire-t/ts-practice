export default {}

type IsUnion<T, Y = T> =
	T extends T
	? [Y] extends [T]
	? false
	: true
	: never

// 这个题解
// https://juejin.cn/post/7034719125242920990

/**
 * 
type Res1 = string|number extends string|number ? true : false // true
type Res2 = string extends string|number ? true : false // true
type Res3 = string|number extends string ? true : false // false


string|number extends string|number ? true : false 需要拆分成
string extends string|number ? true : false 
和 number extends string|number ? true : false 两步。

拆分出来的表达式的结果分别是true和true，结果进行联合，还是true，所以Res1的结果就是true。

T extends T 作用 —— 拆分
在经过 T extends T 的拆分后， 
Array<F> extends Array<T> 这一行中的 T 已经成为了联合类型中的某个单独的类型了,
而 F 依然还是 完备的联合类型，这就导致了 Array<F> extends Array<T> 不成立。

*/

// type IsUnion<T, F = T> =
// 	T extends T
// 	? Array<F> extends Array<T>
// 	? false
// 	: true
// 	: never

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string | number>  // true
type case3 = IsUnion<[string | number]>  // false
