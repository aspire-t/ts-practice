export default {}

type Item = 'semlinker,lolo,kakuqo'

type Split<
	S extends string,
	Delimiter extends string,
	> = S extends `${infer Head}${Delimiter}${infer Tail}`
	? [Head, ...Split<Tail, Delimiter>]
	: S extends Delimiter
	? []
	: [S]

// 测试用例
type ElementType = Split<Item, ','> // ["semlinker", "lolo", "kakuqo"]
type ElementType2 = Split<'a|b|c||d', '|'> // ["a", "b", "c", "", "d"]
type ElementType3 = Split<'abcdef', ''> // ["a", "b", "c", "d", "e", "f"]
