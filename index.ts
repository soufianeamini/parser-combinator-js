import { parse_alpha } from "./advanced"
import { parse_curly } from "./json"
import { parser } from "./primitives"

// let json = `{"name": "Soufiane"}`

let test = "{a}"

console.log(parser(test)(parse_curly(parse_alpha)))
