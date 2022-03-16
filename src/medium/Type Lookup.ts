export default {}

// 在此挑战中，我们想通过在联合Cat | Dog中搜索公共type字段来获取相应的类型。换句话说，在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。

type LookUp<T, K> = T extends { type: K } ? T : never

interface Cat {
	type: 'cat'
	breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
	type: 'dog'
	breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
	color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
