import { Replace } from './84. Replace'

export default {}

// ReplaceAll工具类型取出子字符串之后利用递归。
type ReplaceAll<
	S extends string,
	From extends string,
	To extends string
	> = S extends `${infer H}${From}${infer R}`
	? `${ReplaceAll<H, From, To>}${To}${Replace<R, From, To>}`
	: S

// 测试用例
type R0 = ReplaceAll<'', '', ''> // ''
type R1 = ReplaceAll<'barfoo', 'bar', 'foo'> // "foofoo"
type R2 = ReplaceAll<'foobarbar', 'bar', 'foo'> // "foofoofoo"
type R3 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // "fobarfobar"
