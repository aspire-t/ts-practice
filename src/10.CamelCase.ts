// export type CamelCase<T extends string, Prev extends string = ''> =
// 	T extends `${infer L}-${infer R1}${infer R2}` ?
// 	CamelCase<R2, `${Prev}${L}${Uppercase<R1>}`> :
// 	Capitalize<`${Prev}${T}`>

export type CamelCase<T extends string, Prev extends string = ''> =
	T extends `${infer L}-${infer R1}${infer R2}`
	? CamelCase<R2, `${Prev}${L}${Uppercase<R1>}`>
	: `${Prev}${T}`


type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag
