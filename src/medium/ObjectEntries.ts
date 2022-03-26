export default {}

// case one
type ObjectEntries<T, K extends unknown = keyof T> = K extends keyof T ? [K, Required<T>[K]] : never

// case two
// type Values<T> = T[keyof T]
// type ObjectEntries<T> = Values<{
// 	[P in keyof T]-?: [P, Exclude<T[P], undefined>]
// }>

interface Model {
	name: string
	age: number
	locations: string[] | null
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
