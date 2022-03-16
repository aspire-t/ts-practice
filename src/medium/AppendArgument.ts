export default {}

type AppendArgument<Fn, U> = Fn extends (...args: infer Args) => infer R
	? (...args: [...Args, U]) => R
	: never

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number
