export default {}

type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [...infer P, infer L]
	? Reverse<P, [...R, L]>
	: R;

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
