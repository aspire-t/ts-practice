export default {}

// 获取对象类型中的可选属性的联合类型

type ExcludeUndefined<T> = { [K in keyof T]: Exclude<T[K], undefined> }

//方式一
// export type OptionalKeys<T> = { [K in keyof T]-?: undefined extends ExcludeUndefined<T>[K] ? K : never }[keyof T]
// 方式二
// export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? K : never) : never
// 方法三
export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never) : never

type a1 = OptionalKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // bar
type a2 = OptionalKeys<{ foo: number, bar?: string }>                                   // bar
type a3 = OptionalKeys<{ foo: number, flag: boolean }>                                  // never
type a4 = OptionalKeys<{ foo?: number, flag?: boolean }>                                // foo|flag
type a5 = OptionalKeys<{}>                                                              // never
