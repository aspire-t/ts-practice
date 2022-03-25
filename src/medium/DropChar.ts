export default {}

// case one
type DropChar<S, C, T extends string = ''> =
	S extends `${infer H}${infer R}`
	? (H extends C
		? DropChar<R, C, T>
		: DropChar<R, C, `${T}${H}`>)
	: T

// case two
// 这个应该更好理解
type DropChar<String extends string, Char extends string> =
	String extends `${infer Pre}${Char}${infer Post}`
	? DropChar<`${Pre}${Post}`, Char>
	: String

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

// https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension#heading-8
// https://juejin.cn/post/6999280101556748295#heading-46
