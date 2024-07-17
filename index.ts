import { parser } from "./primitives"
import { parse_ident } from "./semantic"

let text = "  _value3 lelele"

console.log(parser(text)(parse_ident))
