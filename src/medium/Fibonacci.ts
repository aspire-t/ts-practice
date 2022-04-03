export default {}

// case one 
type Fibonacci<T extends number, X extends number[] = [], Y extends number[] = [0], P extends number[] = []> =
	T extends P['length']
	? X['length']
	: Fibonacci<T, Y, [...X, ...Y], [...P, 0]>

// case two
// type Fibonacci<T extends number, C extends any[] = [[1], []]> = C extends [infer _, ...infer Rest]
// 	? Rest['length'] extends T
// 	? C[0]['length']
// 	: Fibonacci<T, [[...C[0], ...C[1]], ...C]>
// 	: never

// case three
// type BuildArray<Len extends number, V extends unknown[] = []> = V['length'] extends Len ? V : BuildArray<Len, [...V, unknown]>

// type Add<A extends number, B extends number> = [...BuildArray<A>, ...BuildArray<B>]['length']

// type Fibonacci<
// 	T extends number,
// 	Cur extends number = 2,
// 	Day2 extends number = 0,
// 	Day1 extends number = 1
// 	> = Cur extends T
// 	? Add<Day2, Day1>
// 	: Fibonacci<T, Add<Cur, 1> & number, Day1, Add<Day1, Day2> & number>;


// case four
// type Add<
// 	A extends number[],
// 	B extends number[]> = [...A, ...B]

// type Last<
// 	A extends number[],
// 	Reversed extends number[] = []
// 	> =
// 	Reversed['length'] extends A['length']
// 	?
// 	Reversed[0]
// 	:
// 	Last<A, [A[Reversed['length']], ...Reversed]>

// type Fibonacci<
// 	N extends number,
// 	A extends number[] = [1],
// 	B extends number[] = A,
// 	Sequence extends number[] = []
// 	> =
// 	Sequence['length'] extends N ? Last<Sequence>
// 	:
// 	Fibonacci<N, B, Add<A, B>, [...Sequence, A['length']]>

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
