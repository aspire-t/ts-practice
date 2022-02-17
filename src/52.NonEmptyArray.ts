export default {}

/**
	[T, ...T[]]确保第一项一定是T，[...T[]]，为剩余数组类型。
 */
type NonEmptyArray<T> = [T, ...T[]];

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
