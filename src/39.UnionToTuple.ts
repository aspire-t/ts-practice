// import { UnionPop } from './38.UnionPop'

export default {}

// 联合类型转换为元组类型

// type UnionToTuple<T, TT = T, R extends any[] = []> = [T] extends [R[number]] ? R : UnionToTuple<T, Exclude<TT, UnionPop<TT>>, [UnionPop<TT>, ...R]>

//方法一
type UnionToIntersection<T> = (T extends any ? (args: T) => any : never) extends (args: infer R) => any ? R : never
type LastInUnion<T> = UnionToIntersection<(T extends any ? (arg: T) => any : never)> extends (arg: infer R) => any ? R : never
type UnionToTuple<T, U = T> = [T] extends [never] ? [] : [LastInUnion<T>, ...UnionToTuple<Exclude<U, LastInUnion<T>>>]

//方法二
export type UnionPop<U> = ((U extends any ? (k: (x: U) => void) => void : never) extends (k: infer I) => void ? I : never) extends ((a: infer A) => void) ? A : never
type UnionToTuple2<T, TT = T, R extends any[] = []> = [T] extends [R[number]] ? R : UnionToTuple2<T, Exclude<TT, UnionPop<TT>>, [UnionPop<TT>, ...R]>

type a = UnionToTuple<1 | 2 | 3>                      // [1, 2, 3]
type b = UnionToTuple<1 | string | boolean>           // [1, string, boolean]
type c = UnionToTuple<any>                            // [any]

type Q1 = UnionToTuple<string | number | symbol>                                // [symbol, number, string]
type Q2 = UnionToTuple<string | number | symbol | boolean>                      // [boolean, symbol, number, string]
type Q3 = UnionToTuple<string | number | symbol | boolean | [boolean]>          // [boolean, [boolean], symbol, number, string]
