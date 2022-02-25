export default {}

type GenArr<N extends number, S extends any[] = []> = S['length'] extends N
	? S
	: GenArr<N, [...S, '']>

type Add<N extends number, M extends number> = [
	...GenArr<N>,
	...GenArr<M>
]['length']

type A0 = Add<5, 5> // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30> // 40
