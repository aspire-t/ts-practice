export default {}

// type RemoveIndexSignature<T> = {
// 	[P in keyof T as P extends `${infer R}` ? P : never]: T[P]
// }

type RemoveIndexSignature<T> = {
	[K in keyof T as string extends K
	? never
	: number extends K
	? never
	: K]: T[K]
}

type Foo = {
	[key: string]: any
	foo(): void
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
