export default {}

type Replace<T extends string, From extends string, To extends string> =
	T extends `${infer L}${From}${infer R}`
	? `${L}${To}${R}`
	: T

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
