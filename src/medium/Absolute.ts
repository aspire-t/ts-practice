export default {}

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}` ? V : T
// your answers
// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}` ? V : `${T}`

type Test = -100
type Result = Absolute<Test> // expected to be "100"

type A = 10
type absoluteA = Absolute<A> // 10