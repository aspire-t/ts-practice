export default {}

declare const config: Chainable

/**
config可以进行链式调用，可以联想到 js 中return this这种思路，所以这里opiton的返回值就应该是一个新的Chainable，把添加的属性类型当做下一个Chainable的T。
1、Chainable类型定义中的option返回值类型为新的Chainable，将添加的属性当做下一个Chainable的T；
2、get类型直接就返回Chainable中的T。
 */

type Simplify<T> = {
	[P in keyof T]: T[P]
}

type Chainable<T = {}> = {
	option<V, S extends string>(
		key: S,
		value: V
	): Chainable<
		T & {
			[P in keyof { S: S } as `${S}`]: V
		}
	>
	get(): Simplify<T>
}

const result = config
	.option('age', 7)
	.option('name', 'lolo')
	.option('address', { value: 'XiaMen' })
	.get()

type ResultType = typeof result
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }
