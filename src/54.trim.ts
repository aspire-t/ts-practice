export default {}

type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V

type Trim<V extends string> = TrimLeft<TrimRight<V>>// 你的实现代码

// 测试用例
type A = Trim<'  semlinker  '>
//=> 'semlinker'
