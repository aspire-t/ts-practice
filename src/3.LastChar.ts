namespace lastChar {
	type LastChar<T, TT = never> = T extends `` ? TT : T extends `${infer L}${infer R}` ? LastChar<R, L> : never

	type a = '1234567' extends `${infer L}${infer M}${infer R}` ? L : never     //1
	type b = '1234567' extends `${infer L}${infer M}${infer R}` ? M : never     //2
	type c = '1234567' extends `${infer L}${infer M}${infer R}` ? R : never     //34567
	type d = '1' extends `${infer L}${infer R}` ? R : 2 // '' 如果没有剩余的 R 那么 R 为 ''
	type e = '' extends `${infer L}${infer R}` ? 1 : 2 // 2  对于一个空串，没法拆成左右两个部分

	type A = LastChar<'BFE'> // 'E'
	type B = LastChar<'dev'> // 'v'
	type C = LastChar<''> // never
}