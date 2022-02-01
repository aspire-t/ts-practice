export default {}
//保留元组类型T中的A类型

type Filter<T, M, prev extends M[] = []> = T extends [infer L, ...infer R] ? [L] extends [M] ? Filter<R, M, [...prev, L]> : Filter<R, M, [...prev]> : prev

/**
 *  为什么是 [L] extends [M] 而不是 L extends M, 因为前者不分布，后者会分布
 */

/**
分布式有条件类型
如果有条件类型里待检查的类型是naked type parameter，那么它也被称为“分布式有条件类型”。 分布式有条件类型在实例化时会自动分发成联合类型。 例如，实例化T extends U ? X : Y，T的类型为A | B | C，会被解析为(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)。
*/

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
