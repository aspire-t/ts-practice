export default {}

// your answers
type PickByType<T, U> = {
	// 重点是用 as T[K]
	[K in keyof T as T[K] extends U ? K : never]: T[K]
}

// From T, pick a set of properties whose type are assignable to U.
type OnlyBoolean = PickByType<{
	name: string
	count: number
	isReadonly: boolean
	isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

