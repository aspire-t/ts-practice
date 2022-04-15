export default {}

type GreaterThan<T extends number, U extends number, L extends number[] = []> = L['length'] extends T
	? false
	: L['length'] extends U
	? true
	// 0的目的是因为数组的长度，要+1，可以不是0，随便放个啥都行
	// 但是为啥这样展开，就能增加数组长度？
	: GreaterThan<T, U, [0, ...L]>

//  
type A = GreaterThan<2, 1> //should be true
type B = GreaterThan<1, 1> //should be false
type C = GreaterThan<10, 100> //should be false
