namespace capitalizeString {
	type CapitalizeString<T> = T extends `${infer L}${infer M}${infer R}` ? `${Uppercase<L>}${Uppercase<M>}${R}` : T

	// infer 的用法
	/**
	 * infer 用法
	 * 以 handler 为例 infer L 是 h , infer M 是a infer R 是剩余的 ndler
	 * 
	 */

	type a1 = CapitalizeString<'handler'>       // Handler
	type a2 = CapitalizeString<'parent'>        // Parent
	type a3 = CapitalizeString<233>             // 233

	let a: a1 = 'HAndler'
	let b: a3 = 233
}
