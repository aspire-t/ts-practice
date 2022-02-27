export default {}

/**
 * 
依次遍历对象，对一些属性类型做特殊处理

1、属性定义为MyClass类类型需要取的是toJSON函数属性的值，从新作为属性的字面量；

2、属性定义为函数类型需要改变成never类型；

3、深层对象需要递归遍历。
 */

type JsonifiedObject<T extends object> = {
	[K in keyof T]: T[K] extends { toJSON(): infer Return }
	? ReturnType<T[K]['toJSON']>
	: T[K] extends (...args: any[]) => any
	? never
	: T[K] extends object
	? JsonifiedObject<T[K]>
	: T[K]
}

type MyObject = {
	str: "literalstring",
	fn: () => void,
	date: Date,
	customClass: MyClass,
	obj: {
		prop: "property",
		clz: MyClass,
		nested: { attr: Date }
	},
}

declare class MyClass {
	toJSON(): "MyClass"
}

/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
*/

type JsonifiedMyObject = JsonifiedObject<MyObject>
declare let ex: JsonifiedMyObject
const z1: "MyClass" = ex.customClass
const z2: string = ex.obj.nested.attr
