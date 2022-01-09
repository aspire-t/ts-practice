// type KebabCase<T, Prev extends string = ''> = T extends `${infer L}${infer R}` ? KebabCase<R, `${Prev}${L extends Uppercase<L> ? `-${Lowercase<L>}` : L}`> : (Prev extends `-${infer L}` ? L : Prev)

type RemoveFirst<T> = T extends `-${infer L}` ? L : T

type KebabCase<T, Prev extends string = ''> = T extends `${infer L}${infer R}` ? KebabCase<R, `${Prev}${L extends Uppercase<L> ? `-${Lowercase<L>}` : L}`> : RemoveFirst<Prev>

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag
type a3 = KebabCase<''>
