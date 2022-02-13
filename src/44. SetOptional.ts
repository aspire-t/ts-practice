
export default { }

/**
 * Omit 为反选的意思，
 * 以上面测试用例讲解
 * 1.首先 Omit<T,K> => Omit<Foo, 'a'| 'b'> => { c: boolean }
 * Partial<Pick<T, K>> 这里是嵌套，我们先看看 Pick<T, K>
 * 2.Pick<T, K> => Pick<Foo, 'a' | 'b'> => { a: number, b?: string } =>
 * 3.Partial<{ a: number, b?: string }> 所有变成可选 => { a?: number, b?: string }
 * 4.最后我们得到：{ c: boolean } & { a?: number, b?: string }
 * 5.合并得到之后: { a?: number, b?: string , c: boolean} 
 */

type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }
