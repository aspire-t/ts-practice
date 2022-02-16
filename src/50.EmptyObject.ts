export default {}
/**
EmptyObject类型中[K in keyof any] 等同于[K in string | number | symbol]，将所有对象属性对应类型设置为never。
 */
type EmptyObject = {
	[K in keyof any]: never
}

// 测试用例
const shouldPass: EmptyObject = {} // 可以正常赋值
const shouldFail: EmptyObject = { // Error: Type 'string' is not assignable to type 'never'
	prop: "TS"
}
