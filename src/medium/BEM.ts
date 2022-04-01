export default { }

// the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

type BEM<B extends string, E extends string[], M extends string[]> = E[number] extends never
	? M[number] extends never
	? B
	: `${B}--${M[number]}`
	: M[number] extends never
	? `${B}__${E[number]}`
	: `${B}__${E[number]}--${M[number]}`
