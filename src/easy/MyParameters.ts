export default { }

type MyParameters<T extends (...args: any[])=> any> = 
T extends (...args: infer ParamsType) => any 
? ParamsType 
: never

declare function f1(arg: { a: number; b: string }): void;

type T0 = MyParameters<() => string>// type T0 = []
type T1 = MyParameters<(s: string) => void> // type T1 = [s: string]
type T2 = MyParameters<<T>(arg: T) => T> // type T2 = [arg: unknown]
type T3 = MyParameters<typeof f1>;
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]

type T4 = MyParameters<any>;
// type T4 = unknown[]

type T5 = MyParameters<never>;
// type T5 = never

type T6 = MyParameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T6 = never

type T7 = MyParameters<Function>;
// ype 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
