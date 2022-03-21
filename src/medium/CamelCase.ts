export default {}

// own answers
type CamelCase<T extends string> = T extends `${infer L}-${infer R1}${infer R2}`
	? CamelCase<`${L}${Uppercase<R1>}${R2}`>
	: T

// get answers
// type CamelCase<S> = S extends `${infer F}-${infer R}`
// 	? (R extends Capitalize<R>
// 		? `${F}-${CamelCase<R>}`
// 		: `${F}${CamelCase<Capitalize<R>>}`)
// 	: S

type A = CamelCase<'for-bar-baz'> // forBarBaz
type B = CamelCase<'a-b-c'> // aBC
type a1 = CamelCase<'handle-open-flag'>         // handleOpenFlag
type a2 = CamelCase<'open-flag'>                // openFlag
