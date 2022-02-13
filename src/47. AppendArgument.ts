export default {}

type Fn = (a: number, b: string) => number

/**
	1、泛型 F 为需要增加参数x 的函数类型，F 约束于函数类型，泛型T为x参数指定的类型，返回一个新函数类型，
	2、x参数类型为 T，...args剩余参数类型使用Parameters工具类型拿到F泛型的数组类型参数类型，ReturnType工具类型拿到F函数类型的返回类型。
*/

type AppendArgument<T extends (...args: any) => any, K> = (
	x: K,
	...args: Parameters<T>
) => ReturnType<T>

/**
	infer推导拿到参数类型P返回值类型为Return，再从新返回一个新函数x参数为T，...args参数类型为前面推导保留的P，返回值即Return。
 */

// type AppendArgument<F extends (...args: any) => any, T> = F extends (
// 	...args: infer P
// ) => infer Return
// 	? (x: T, ...args: P) => Return
// 	: never

type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number
