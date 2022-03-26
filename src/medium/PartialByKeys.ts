export default {}

// case one
// type PartialByKeys<T, K extends keyof T = keyof T> = Partial<Pick<T, K>> & Omit<T, K>

// case two
// type Copy<T> = {
// 	[P in keyof T]: T[P]
// }

// type PartialByKeys<T, K = keyof T> = Copy<Omit<T, K & keyof T> & {
// 	[P in K & keyof T]?: T[P]
// }>

// case three
type Copy<T> = {
	[K in keyof T]: T[K]
}

type PartialByKeys<T, K = any> = Copy<{
	[P in keyof T as P extends K ? P : never]?: T[P]
} & {
		[P in Exclude<keyof T, K>]: T[P]
	}>


interface User {
	name: string
	age: number
	address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

let a: UserPartialName = {
	age: 15,
	address: '',
} 