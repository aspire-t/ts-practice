export default {}

type OptionalKeys<T> = {
	[P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

/**
没有[keyof T] 的结果
type PersonOptionalKeys = {
	id: never;
	name: never;
	age: never;
	from: "from";
	speak: "speak";
}
 */
type Person = {
	id: string
	name: string
	age: number
	from?: string
	speak?: string
}

type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
