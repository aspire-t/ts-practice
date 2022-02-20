export default {}

type Merge<FirstType, SecondType> = {
	[T in keyof FirstType & SecondType]: T extends keyof FirstType ? FirstType[T] : T extends keyof SecondType ? SecondType[T] : never
}

// 内置Omit
// type Merge<FirstType, SecondType> = Omit<FirstType, keyof SecondType> & SecondType;

type Foo = {
	a: number
	b: string
}

type Bar = {
	b: number
}
//注意的是：合并属性，后一个类型会覆盖前一个类型。 
const ab: Merge<Foo, Bar> = { a: 1, b: 2 }
