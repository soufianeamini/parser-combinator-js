import { skip_whitespaces } from "./advanced"
import { and, parse_string, parser } from "./primitives"
import { parse_ident } from "./semantic"

let text = "  \n\t _value3 "

console.log(parser(text)(parse_string(and(skip_whitespaces)(parse_ident))))
