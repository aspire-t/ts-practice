export default {}

// 指定的类型是否为never类型

/**
1、[T]和[never]为元组，作为包装类型，联合类型不会被分发；
2、never类型不能扩展never类型，但是never[]可以扩展never[]。
 */
type IsNever<T> = [T] extends [never] ? true : false

// 测试用例
type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false
type I3 = IsNever<{}> // false
type I4 = IsNever<[]> // false
type I5 = IsNever<[] | never> // false
