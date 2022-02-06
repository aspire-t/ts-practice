export default {}

// 有且只有一个属性
type UnionToBooleanProps<T extends string, TT extends string = T> =
	T extends any ?
	{ [k in Exclude<TT, T>]?: void } & { [k in T]: boolean }
	: never

// 实现一个叫做 UnionToBooleanProps 的泛型，使得以下需求成立

type MessageStringType = "info" | "success" | "warning" | "error"
type OneMessageTypes = UnionToBooleanProps<MessageStringType>
// UnionToBooleanProps 的意思就是转化成下面这种样子
// type OneMessageTypes =
// 	{ info: true, success?: never, warning?: never, error?: never } |
// 	{ info?: never, success: true, warning?: never, error?: never } |
// 	{ info?: never, success?: never, warning: true, error?: never } |
// 	{ info?: never, success?: never, warning?: never, error: true }


type Props = OneMessageTypes & { id: string }

function Component(props: Props) {
	return <></>
}

const a = <Component id="abc" info />           //correct
const b = <Component id="abc" success />        //correct
// const c = <Component id="abc" />                //wrong
// const d = <Component id="abc" info success />   //wrong

// 组件Component所接收的属性，有且只有一个 "info" | "success" | "warning" | "error" 中的值；
