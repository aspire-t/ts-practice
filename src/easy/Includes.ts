import { Equal } from '../23.equal'

export default {}

// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。

// 这个 T[number] 这种判断，没理解是什么意思
// type Includes<T extends any[], K> = K extends T[number] ? true : false

// 递归思路
type Includes<T extends readonly any[], U> =
	T extends [infer First, ...infer Rest]
	? Equal<First, U> extends true
	? true
	: Includes<Rest, U>
	: false

type A = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type B = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `true`
