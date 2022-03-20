export default {}

type AppendToObject<T extends Record<string, unknown>, U extends string, V extends unknown> = {
	[K in keyof T | U]: K extends U ? V : T[K]
}

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
