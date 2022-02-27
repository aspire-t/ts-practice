export default { }

type EndsWith<T extends string, U extends string> = T extends `${infer Head}${U}` ? true : false

// 测试用例
type E0 = EndsWith<"123", "23"> // true
type E1 = EndsWith<"123", "13"> // false
type E2 = EndsWith<"123", "123"> // true
