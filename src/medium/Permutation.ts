export default {}

// When T and U are a single string, this Exclude<U, T> be never, then [T] extends [never] is true, return [].
// Otherwise T should be a subset of U, eg T equals 'A' and U is equal to 'A' | 'B' | 'C'
type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : []

type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type A = Permutation<'1' | '2'>
type B = Permutation<'1' | '2' | '3' | '4'>
