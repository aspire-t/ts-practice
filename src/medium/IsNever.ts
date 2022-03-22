export default {}


type IsNever<T> = [T] extends [never] ? true : false

// 为什么这样是错的？
// 注意 T一定是要被包裹起来，不能是裸类型。因为 TS 会对 extends 左边的裸类型进行分发，但当遇到never时，TS 会认为对never分发是没有意义的，而不再进行逻辑判断，直接返回never。
// type IsNever<T> = T extends never ? true : false

type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
type F = IsNever<any> // false
