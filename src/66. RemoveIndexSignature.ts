export default {}

// 移除已有类型中的索引签名

/**
 * 
1、遍历T，利用as断言实现对K的判断过滤；

2、当前的key如果满足string | number | symbol 直接返回never过滤当前属性；

3、否则拿当前K，当前K值类型为T[K]。
 */

type RemoveIndexSignature<T> = {
	[K in keyof T as string extends K
	? never
	: number extends K
	? never
	: symbol extends K
	? never
	: K]: T[K]
}

interface Foo {
	[key: string]: any
	[key: number]: any
	[key: symbol]: any
	bar(): void
}

type FooWithOnlyBar = RemoveIndexSignature<Foo> //{ bar: () => void; }
