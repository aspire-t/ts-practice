export default {}

type GetComputed<C> = C extends Record<string, (...args: any[]) => any>
	? { [S in keyof C]: ReturnType<C[S]> }
	: never

declare function SimpleVue<D, C, M>(
	options: {
		data: () => D
		computed: C
		methods: M
	} & ThisType<D & M & GetComputed<C>>
): any

// 关于ThisType的解释可以看这里
// https://jkchao.github.io/typescript-book-chinese/typings/thisType.html
// (...args: unknown[])代表未知参数数量的函数
// methods: M & ThisType<D & C & ThisType> 交叉赋值类型

const instance = SimpleVue({
	data() {
		return {
			firstname: 'Type',
			lastname: 'Challenges',
			amount: 10,
		}
	},
	computed: {
		fullname() {
			return this.firstname + ' ' + this.lastname
		}
	},
	methods: {
		hi() {
			alert(this.fullname.toLowerCase())
		}
	}
})
