export default {}

type Diff<O, O1> = {
	[P in (Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>)]
	: P extends keyof O
	? O[P]
	: P extends keyof O1
	? O1[P]
	: never
}

type A = {
	name: string
	gender : number
}

type B = {
	name: string
	age: number
}

type E = Exclude<keyof A, keyof B> // gender
type E2 = Exclude<keyof B, keyof A> // age

type A1 = Diff<A, B>
