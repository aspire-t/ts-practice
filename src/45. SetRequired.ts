export default {}

type SetRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

type Foo = {
	a: number
	b?: string
	c: boolean
}

// 测试用例
type SomeRequired = SetRequired<Foo, 'a' | 'b'>

// type SomeRequired = {
// 	a: number; // 该属性已变成必须的
// 	b: string; // 该属性已变成必须的
// 	c: boolean; // 保持不变
// }

let A : SomeRequired = {
	a: 1,
	b: '1',
	c: false
}
