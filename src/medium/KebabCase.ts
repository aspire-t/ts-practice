export default {}

// type KebabCase<S extends string> =
// 	S extends `${infer First}${infer Rest}`
// 	? `${Lowercase<First>}
// 	${Rest extends Uncapitalize<Rest>
// 	? KebabCase<Rest>
// 	: `-${KebabCase<Capitalize<Rest>>}`
// 	} `
// 	: S

// case one
// type KebabCase<S extends string, T extends string = ''> =
// 	S extends `${infer F}${infer L}`
// 	? F extends Lowercase<F>
// 	? `${F}${KebabCase<L, '-'>}`
// 	: `${T}${Lowercase<F>}${KebabCase<L, '-'>}`
// 	: S

// case two
type KebabCase<S> =
	S extends `${infer F}${infer L}`
	// Uncapitalize 首字母小写
	? L extends Uncapitalize<L>
	? `${Lowercase<F>}${KebabCase<L>}`
	: `${Lowercase<F>}-${KebabCase<L>}`
	: S

type A = KebabCase<'FooBarBaz'> // foo-bar-baz
type B = KebabCase<'ABC'> // a-b-c
type a1 = KebabCase<'handleOpenFlag'> // "handle-open-flag" 
type a2 = KebabCase<'openFlag'> // "open-flag" 
