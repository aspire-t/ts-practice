export default {}

type DropChar<S, C, T extends string = ''> =
	S extends `${infer H}${infer R}`
	? (H extends C
		? DropChar<R, C, T>
		: DropChar<R, C, `${T}${H}`>)
	: T


type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
