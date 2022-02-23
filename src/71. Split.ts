export default {}

/**
1、${infer Head}${Delimiter}${infer Tail}映射类型在模板变量中使用，将一个字符串做拆解;
2、第一步会变成${infer "semlinker"}${,}${infer "lolo,kakuqo"}，减治思想，再递归依次取第二位，直至递归到Delimiter符号的最后一项，S extends Delimiter处理Delimiter为空格的情况。
 */

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
type ElementType4 = Split<' ', ' '> // ["", ""]
type ElementType5 = Split<'abcdef', ' '> // ["abcdef"]
