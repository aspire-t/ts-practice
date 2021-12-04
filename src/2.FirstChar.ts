
namespace firstChar {
	type FirstChar<T> = T extends `${infer L}${infer M}${infer R}` ? `${L}` : never

	type A = FirstChar<'BFE'> // 'B'
	type B = FirstChar<'dev'> // 'd'
	type C = FirstChar<''> // never

	let a: A = 'B'
	let b: B = 'd'
	let c: C
}