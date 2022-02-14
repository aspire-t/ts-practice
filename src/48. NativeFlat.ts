export default { }

type NaiveFlat<T extends any[]> = T extends (infer P)[] ? P extends any[] ? NaiveFlat<P> : P : never

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], [['b', 'c']], ['d']]>

// NaiveResult的结果： "a" | "b" | "c" | "d"
