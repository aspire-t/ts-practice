export default {}

/**
1、extends unknown始终为true，默认进入到分发情况
2、会声明一个以Union为入参类型的函数类型A，即(distributedUnion: Union) => void，该函数约束于以mergedIntersection类型为入参的函数类型B，即(mergedIntersection: infer Intersection) => void。
3、如果函数A能继承函数B则 返回infer Intersection声明的Intersection，否则返回never，再利用函数参数类型逆变，从而实现得到的结果从联合类型到交叉类型的转变。
这里是也设计到一个知识点：**分布式条件类型，**条件类型的特性：分布式条件类型。在结合联合类型使用时（只针对extends左边的联合类型），分布式条件类型会被自动分发成联合类型。例如，T extends U ? X : Y，T的类型为A | B | C，会被解析为(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)。

// infer声明都是只能出现在extends子语句中。但是，在协变的位置上，同一类型变量的多个候选类型会被推断为联合类型：
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never
type T10 = Foo<{ a: string, b: string }>  // string
type T11 = Foo<{ a: string, b: number }>  // string | number

// 在逆变的位置上，同一个类型多个候选类型会被推断为交叉类型：
type Bar<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
type T20 = Bar<{ a: (x: string) => void, b: (x: string) => void }>;  // string
type T21 = Bar<{ a: (x: string) => void, b: (x: number) => void }>;  // string & number
 */

export type UnionToIntersection<Union> = (
	Union extends unknown ? (distributedUnion: Union) => void : never
) extends (mergedIntersection: infer Intersection) => void
	? Intersection
	: never

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
