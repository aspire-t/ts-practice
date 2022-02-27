export default {}

/**
 * 
利用任何类型与any交叉都等于any实现

any类型是个 ”黑洞“ 会吞噬除了never类型之外的大多数类型。

type A0 = any & 1 // any
type A1 = any & boolean // any
type A2 = any & never // never

因此需要前置0 extends 交叉结果防止交叉结果为never类型的情况处理。
 */
type IsAny<T> = 0 extends 1 & T ? true : false

type I0 = IsAny<never> // false
type I1 = IsAny<unknown> // false
type I2 = IsAny<any> // true
