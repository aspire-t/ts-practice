export default { }

/**
1、第一次得到的P被推断出的类型为 ["a"] | [["b", "c"]] | ["d"]，满足约束;
2、走到P是否约束any[]，此时还满足还存在数组情况， 因此继续递归传入 P；
3、第二次infer P推导出P的类型为 "a" | ["b", "c"] | "d"，再次约束，此时在extends条件语句中，联合类型为裸类型时，会被分发，先走'a'逻辑，不满足与any[]返回'a'；
4、走完'a'就走到['b', 'c']，即满足any[]继续递归，返回得到 =>'a' | 'b' | 'c'；
5、最后走'd',最终得到 => 'a' | 'b' | 'c' | 'd'。
 */

type NaiveFlat<T extends any[]> = T extends (infer P)[] ? P extends any[] ? NaiveFlat<P> : P : never

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], [['b', 'c']], ['d']]>

// NaiveResult的结果： "a" | "b" | "c" | "d"
