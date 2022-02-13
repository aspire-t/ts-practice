export default {}

interface Todo {
	title: string
	description: string
	completed: boolean
}

type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
	title: "Clean room",
	completed: false
}

/**
 * 为什么要加个 as T[P] ? 这个地方没有get到
 */

/**
1、in keyof遍历 V 泛型；
2、通过类型断言判断 V[K] 对应键值是否约束于传入的 string如果是 true 那么断言成返回遍历的当前 K，否则为 never。

返回 never 在 TypeScript 编译器中，会默认认为这是个用不存在的类型，也相当于没有这个 K 会被过滤，对应值则是 V[K] 获取。
 */

type ConditionalPick<T, K extends any> = {
	[P in keyof T as T[P] extends K ? P : never]: T[P]
}

interface Example {
	a: string
	b: string | number
	c: () => void
	d: {}
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>
//=> {a: string}
