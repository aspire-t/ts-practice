export default {}

interface Person {
	name: string
	age?: number
	gender?: number
}

// 其实就是要构建成这个样子
// type Test = { name: string } & ({ age: number, gender?: never } | { age?: never, gender: number })

/**
 * 
利用联合类型extends实现分布执行，然后就是如何让联合类型规则只有其中某一个生效，那么其他属性就需要设置为可选never。
以传入'age' | 'gender'为例：
Keys用作分布执行，Keys extends any就是为了触发联合类型在条件中分发执行，K保留联合类型。
{ name: string } & { age: number } & { gender?: never } |
{ name: string } & { age?: never } & { gender: number }
 */
// 只能包含Keys中唯一的一个Key
type RequireExactlyOne<T, Keys extends keyof T, K extends keyof T = Keys> = Keys extends any
	? Omit<T, K> & Required<Pick<T, Keys>> & Partial<Record<Exclude<K, Keys>, never>>
	: never

const p1: RequireExactlyOne<Person, 'age' | 'gender'> = {
	name: "lolo",
	age: 7,
}

const p2: RequireExactlyOne<Person, 'age' | 'gender'> = {
	name: "lolo",
	gender: 1
}

// Error
const p3: RequireExactlyOne<Person, 'age' | 'gender'> = {
	name: "lolo",
	age: 7,
	gender: 1
}
