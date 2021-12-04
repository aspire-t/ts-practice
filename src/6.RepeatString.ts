namespace RepeatString {
	type RepeatString<T extends string, K, A extends any[] = [], Prev extends string = ''> = K extends A["length"] ? Prev : RepeatString<T, K, [...A, null], `${Prev}${T}`>

	// type Repeat<StringTuple extends string[], Len extends number, Char extends string> = StringTuple["length"] extends Len ? TupleToString<StringTuple> : Repeat<[...StringTuple, Char], Len, Char>
	// type RepeatString<Str, Len extends number> = Len extends 0 ? '' : (Str extends `${infer S}` ? Repeat<[Str], Len, Str> : never)

	type A = RepeatString<'a', 3> // 'aaa'
	type B = RepeatString<'a', 0> // ''
}
