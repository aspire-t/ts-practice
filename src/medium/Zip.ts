export default {}

type Zip<T extends any[], U extends any[], R extends any[] = []> = T extends [infer TFirst, ...(infer TRest)]
	? U extends [infer UFirst, ...(infer URest)]
	? Zip<TRest, URest, [...R, [TFirst, UFirst]]>
	: R
	: R

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
