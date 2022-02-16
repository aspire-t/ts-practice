export default {}

type SomeType = {
	prop: string
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
// function takeSomeTypeOnly(x: SomeType) { return x }

type Exclusive<T1, T2> = {
	[K in keyof T1]: K extends keyof T2 ? T1[K] : never
}

function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) {
	return x
}

// 测试用例：
// const x = { prop: 'a' }
// takeSomeTypeOnly(x) // 可以正常调用

// const y = { prop: 'a', additionalProp: 'x' }
// takeSomeTypeOnly(y) // 将出现编译错误

takeSomeTypeOnly({ prop: 'a' }) // OK

takeSomeTypeOnly({ prop: 'a', additionalProp: 'x' }) // 将出现编译错误