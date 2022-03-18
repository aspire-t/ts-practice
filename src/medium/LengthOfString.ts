export default {}

type LengthOfString<S extends string, arr extends string[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...arr, L]> : arr['length']

type A = LengthOfString<'111111'> // 6
type B = LengthOfString<'agsduui'> // 7
type C = LengthOfString<'A B C'> // 5
