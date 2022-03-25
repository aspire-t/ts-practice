export default { }

// 给定一个数字(总是正数)作为类型。返回减少1的数字
// case one
type MinusOne<T extends number, P extends any[] = []> = [...P, unknown]['length'] extends T ? P['length'] : MinusOne<T, [...P, unknown]>

// case two
type Make10Array<T extends any[]> = [
	...T,
	...T,
	...T,
	...T,
	...T,
	...T,
	...T,
	...T,
	...T,
	...T
]
type Make1Array<T, L extends any[] = []> = `${L['length']}` extends T
	? L
	: Make1Array<T, [...L, 1]>

type AddEqualArrayLength<
	T extends string,
	L extends any[] = []
	> = T extends `${infer U}${infer R}`
	? AddEqualArrayLength<R, [...Make10Array<L>, ...Make1Array<U>]>
	: L

type Pop<T extends any[]> = T extends [...infer F, number] ? F : never
// type MinusOne<T extends number> = Pop<AddEqualArrayLength<`${T}`>>['length']


type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
