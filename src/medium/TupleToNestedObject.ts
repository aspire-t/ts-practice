export default {}

// type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
// 	? {
// 		[K in F as F extends keyof any ? F : never]: TupleToNestedObject<R, U>
// 	}
// 	: U

// your answers
type TupleToNestedObject<T extends unknown[], U> = T extends [infer H, ...infer R]
	? { [K in H & string]: TupleToNestedObject<R, U> }
	: U

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
