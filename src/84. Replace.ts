export default {}

/**
 * 
 1、利用extends，配合infer配合字符串模板变量的写法就能提取出指定的子字符串，再将From改为To返回结果即可。
 */
export type Replace<
	S extends string,
	From extends string,
	To extends string
	> = S extends `${infer H}${From}${infer R}` ? `${H}${To}${R}` : S

type R0 = Replace<'', '', ''> // ''
type R1 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
type R2 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"
