export default {}

type Filter<T, M, prev extends M[] = []> = T extends [infer L, ...infer R] ? [L] extends [M] ? Filter<R, M, [...prev, L]> : Filter<R, M, [...prev]> : prev

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']