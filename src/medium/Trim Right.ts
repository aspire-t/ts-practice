export default {}

type TWhitespace = ' ' | '\n' | '\t'
export type TrimRight<T extends string> = T extends `${infer L}${TWhitespace}` ? TrimRight<L> : T

type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'
