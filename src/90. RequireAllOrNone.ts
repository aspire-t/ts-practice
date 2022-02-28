export default {}

// 当设置age属性时，gender属性也会变成必填

interface Person {
	name: string
	age?: number
	gender?: number
}

/**
 * 
1、反选排除K后的结果；
2、Required<Pick<T, K>>先选取K在T有的属性，然后把选取完的类型，将它们变成必选；
3、Partial<Record<K, never>>)先创建有K属性的对象类型，属性类型为never，然后将它们都变成可选属性；
4、以上面的'age' | 'gender'为例：
{ age: number ; gender: number} | { age? : undefined | never; gender?: undefined | never}
复制代码
这样如果对象设置了age属性，或者gender属性那么匹配前一对象类型，否则匹配后一对象类型；
5、name属性需要保留，因此使用反选，单独将name属性抽离出来。
 */
type RequireAllOrNone<T, K extends keyof T> = Omit<T, K> &
	(Required<Pick<T, K>> | Partial<Record<K, never>>)

const p1: RequireAllOrNone<Person, 'age' | 'gender'> = {
	name: "lolo",
}

const p2: RequireAllOrNone<Person, 'age' | 'gender'> = {
	name: "lolo",
	age: 7,
	gender: 1
}
