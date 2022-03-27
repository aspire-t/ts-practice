export default {}

type Shift<T> = T extends [infer H, ...infer R] ? R : []

type Result = Shift<[3, 2, 1]> // [2, 1]