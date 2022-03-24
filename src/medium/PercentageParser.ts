export default {}

// case one
type Num = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Operation = '+' | '-'
type PercentageParser<T, U extends string[] = [], N = 0> = N extends 0
	? T extends `${infer L}${infer R}`
	? L extends Operation
	? PercentageParser<R, [L], 1>
	: PercentageParser<T, [''], 1>
	: PercentageParser<T, ['', ''], 2>
	: N extends 1
	? T extends `${infer L}${infer R}`
	? L extends Num
	? PercentageParser<R, [U[0], `${U[1] extends string ? U[1] : ''}${L}`], 1>
	: PercentageParser<T, [U[0], U[1] extends string ? U[1] : ''], 2>
	: PercentageParser<T, [U[0], U[1] extends string ? U[1] : ''], 2>
	: N extends 2
	? T extends `${infer L}`
	? L extends '%'
	? [U[0], U[1], '%']
	: [U[0], U[1], '']
	: [U[0], U[1], '%']
	: never


// case two 
type Prefix = '+' | '-'
type Postfix = '%'

type AddPostFix<
	S extends string,
	F extends string[] = []
	> = S extends `${infer B}${Postfix}` ? [...F, B, Postfix] : [...F, S, '']

type PercentageParser<S extends string> = S extends `${infer F}${infer R}`
	? F extends Prefix
	? AddPostFix<R, [F]>
	: AddPostFix<S, ['']>
	: ['', '', ''];


// case three
type TSplitPm<S extends string> = S extends `${infer H}${infer R}` ? (H extends '+' | '-' ? [H, R] : ['', S]) : ['', '']
type PercentageParser<A extends string> = A extends `${infer F}%` ? [...TSplitPm<F>, '%'] : [...TSplitPm<A>, '']


type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1>  // expected ['', '', '']
type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>  // expected ["", "85", ""]
