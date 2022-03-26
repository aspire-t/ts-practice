export default {}


// 这个和PartialByKeys的原理一样
type RequiredByKeys<T, K extends keyof T = keyof T> = Required<Pick<T, K>> & Omit<T, K>

interface User {
	name?: string
	age?: number
	address?: string
}

type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
