export default {}

// 判断字符串字面量类型T是否以给定的字符串字面量类型U开头，并根据判断结果返回布尔值

/**
 * 
${U}${infer Rest}将U放在开头，infer关键字，会自动推导匹配，如果推导的Rest变量类型满足约束则返回true否则返回false。
 */
type StartsWith<
	T extends string,
	U extends string
	> = T extends `${U}${infer Rest}` ? true : false

type S0 = StartsWith<'123', '12'> // true
type S1 = StartsWith<'123', '13'> // false
type S2 = StartsWith<'123', '1234'> // false
