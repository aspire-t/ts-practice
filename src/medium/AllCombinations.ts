export default {}

// type StrToArr<Str extends string, Res extends string[] = []> = Str extends `${infer Start}${infer End}` ? StrToArr<End, [...Res, Start]> : Res

// type AllCombinations<S extends string, T extends StrToArr<S>[number] = StrToArr<S>[number], Res extends string = '', Type = '', B extends T = T> = S extends ''
// 	? ''
// 	: T extends T
// 	? Exclude<B, T> extends [never] ? Type | `${Res}${T}`
// 	: AllCombinations<S, Exclude<B, T>, `${Res}${T}`, Type | `${Res}${T}`>
// 	: never


// 思路
// 1.将字符串转化为联合类型
type StringToUnion<S extends string> = S extends `${infer L}${infer R}` ? L | StringToUnion<R> : S
// 2.联合类型两两合并
type Combination<A extends string, B extends string> =
	| A
	| B
	| `${A}${B}`
	| `${B}${A}`
// 3 eg
type test = Combination<'A' | 'B', 'C' | 'D'>
//4.联合类型的合并，利用联合类型默认可拆解
type UnionCombination<A extends string, B extends string = A> = A extends B ? Combination<A, UnionCombination<Exclude<B, A>>> : never
//5. 字符串合并
type AllCombinations<S extends string> = UnionCombination<StringToUnion<S>>

type AllCombinations_ABC = AllCombinations<'ABC'>
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
