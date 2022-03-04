export default {}

// 实现类型版本的 Array.unshift。

type Unshift<T extends any[], U> = [U, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]