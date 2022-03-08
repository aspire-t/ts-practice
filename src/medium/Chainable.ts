export default {}

// 在 JavaScript 中我们很常会使用可串联（Chainable / Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给他附上类型吗？

// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get()。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

// 你可以假设 key 只接受字符串而 value 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 key 只会被使用一次。

// 如果对象中已经有这个属性了，那这个属性的类型应该取最开始传入值的类型
// type Chainable<T extends Record<string, unknown> = {}> = {
// 	option<K extends string, V = unknown>(key: Exclude<K, keyof T>, value: V): Chainable<T & Record<K, V>>,
// 	get(): T
// }

type Chainable<T = {}> = {
	option<P extends string, V>(key: P, value: P extends keyof T ? T[P] : V): Chainable<T & { [props in P]: P extends keyof T ? T[P] : V }>
	get(): T
}

declare const config: Chainable

const result = config
	.option('foo', 123)
	.option('name', 'type-challenges')
	.option('bar', { value: 'Hello World' })
	.get()

// 期望 result 的类型是：
interface Result {
	foo: number
	name: string
	bar: {
		value: string
	}
}

const A = config
	.option('foo', 123)
	.option('name', 'type-challenges')
	.option('bar', { value: 'Hello World' })
	.get()