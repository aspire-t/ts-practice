type NaiveFlat<T extends any[]> = T[number][number]

const testArr = [['a'], ['b', 'c'], ['d']]

/**
T[number][number]可以理解为 => T[][]一个二维数组的类型表达式，类型[number]在 TypeScript 中，可以代表取数组的中值作为 key, number是数组下标。因此T[number]对应着["a"] | ["b", "c"] | ["d"]，T[number][number]则为 "a" | "b" | "c" | "d"。
 */
const testArrType = typeof testArr // string[][]
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;
// type NaiveResult = "a" | "b" | "c" | "d"

// [number] 
//  取数组的中值作为 key, number 是数组下标
// ["a"] | ["b", "c"] | ["d"]
