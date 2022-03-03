export default {}

// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 比如：Promise <ExampleType>，请你返回 ExampleType 类型。

// 如果不考虑Promise嵌套的情况，直接使用下面这种方法
// type MyAwaited<T> = T extends Promise<infer R> ? R : never

// 考虑Promise嵌套问题，就需要递归的去取值 
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
	? U extends Promise<unknown>
	? MyAwaited<U>
	: U
	: never

type ExampleType = {
	a: '1',
	b: '2'
}

type PromiseT = Promise<ExampleType>

type A = MyAwaited<Promise<PromiseT>>
