import { parse_json } from "./json"
import { parser } from "./primitives"

let json = `{
  "name":"Soufiane"
}`

const [[key, value]] = parser(parse_json)(json)

const obj: any = {}
obj[key] = value

console.log(`Json string: ${json}`)
console.log("Object")
console.log(obj)
