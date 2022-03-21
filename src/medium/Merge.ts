export default {}

// 合并两个key，再取对应对的value值
type Merge<T, K> = {
	[Key in keyof T | keyof K]: Key extends keyof T ? T[Key] : Key extends keyof K ? K[Key] : never
}


type A = 'abc'
type B = 1

type M = Merge<A, B>
