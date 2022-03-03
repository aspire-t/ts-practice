export default {}

//在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

// type Concat<T, K, U extends any[] = []> = T extends [infer L, ...infer R] ? Concat<R, K, [...U, L]>
// : K extends [infer left, ...infer right] ? Concat<T, right, [...U, left]> : U

type Concat<A extends any[], B extends any[]> = [...A, ...B]

type Result = Concat<[1], [2]> // expected to be [1, 2]
