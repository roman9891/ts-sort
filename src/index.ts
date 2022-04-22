import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const nums = new NumbersCollection([5,2,3,1,10])
const chars = new CharactersCollection('xasdfjBSJd')
const list = new LinkedList()

list.add(5)
list.add(3)
list.add(100)
list.add(-2)

nums.sort()
chars.sort()
list.sort()

console.log({nums, chars, list})
