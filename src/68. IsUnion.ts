export default {}

// 判断指定的类型是否为联合类型

/**
1、第一步T extends any确保始终为真，联合类型做分发；
2、联合类型T写成[T]就变成了普通类型，extends的时候不会分发执行，利用其分发的特性，后面的[T]就是一个联合类型拆开后的某一个，
3、因此如果是联合类型的话[U] extends [T]一定为否。
	 比如传入string | number类型会
 */
type IsUnion<T, U = T> = T extends any ? [U] extends [T] ? false : true : never
// 你的实现代码

type I0 = IsUnion<string | number> // true
type I1 = IsUnion<string | never> // false
type I2 = IsUnion<string | unknown> // false
