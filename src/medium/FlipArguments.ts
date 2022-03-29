export default {}

type Reverse<T extends unknown[]> = T extends [infer H, ...infer R] ? [...Reverse<R>, H] : T
type FlipArguments<T> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void
