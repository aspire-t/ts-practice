export default {}

import { TrimLeft } from './Trim Left'
import { TrimRight } from './Trim Right'

type Trim<T extends string> = TrimLeft<TrimRight<T>>

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
