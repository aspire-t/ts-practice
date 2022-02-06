export default {}

//判断是否为没有属性的对象类型{} 
// type IsEmptyType<T> = number extends T
// 	? keyof T extends never
// 	? T extends {}
// 	? true
// 	: false
// 	: false
// 	: false

type IsEmptyType<T> = T extends object ?
	keyof T extends never ?
	number extends T ? true
	: false
	: false
	: false

// 原始数据类型不可以赋值给另一个原始数据类型 number不可以赋值给object
// 包装数据类型可以赋值给原始数据类型，比如 Number可以赋值给object

// let v1 = {} as object
// let v2 = {} as const
// let v3 = 1
// v1 = v3
// v2 = v3

type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown> // false
