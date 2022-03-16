export default {}

// type ReplaceAll<T extends string, From extends string, To extends string> = T

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

type ReplaceAll<S extends string, From extends string, To extends string> =
	From extends ''
	? S
	: S extends `${infer Left}${From}${infer Right}`
	? `${Left}${To}${ReplaceAll<Right, From, To>}` // note this
	: S

type A = ReplaceAll<'foboorfoboar', 'ob', 'b'>
type B = ReplaceAll<'foboorfoboar', 'bo', 'b'>
