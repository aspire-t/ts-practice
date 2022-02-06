export default {}

// 实现Connect类型，能够自动地转化Redux Module对象中的函数类型
interface Module {
	count: number
	message: string
	asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>
	syncMethod<T, U>(action: Action<T>): Action<U>
}

interface Action<T> {
	payload?: T
	type: string
}

// 这个要求的结果
type Result = {
	asyncMethod<T, U>(input: T): Action<U>
	syncMethod<T, U>(action: T): Action<U>
}

// 实现类型Connect，要求 Connect<Module> 的结果为上面的 Result
// 只要函数类型的属性；
// 如果函数是异步函数，要求自动解析出来Promise中的类型；

type InferConnectFunctionParameterType<Func> =
	Func extends <T, U>(input: Promise<T>) => Promise<Action<U>> ? <T, U>(input: T) => Action<U> :
	Func extends (<T, U>(input: Action<T>) => Action<U>) ? (<T, U>(input: T) => Action<U>) : never

type Connect<T, M extends string = { [k in keyof T]: k extends string ? T[k] extends Function ? k : never : never }[keyof T]> = {
	[k in M]: k extends keyof T ? InferConnectFunctionParameterType<T[k]> : never
}

type Result2 = Connect<Module>