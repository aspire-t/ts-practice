type LengthOfString<T, A extends any[] = []> = T extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A['length']

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0