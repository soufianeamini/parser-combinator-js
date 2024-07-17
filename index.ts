import { skip_whitespace } from "./advanced"
import { parser } from "./primitives"

// const parse_Hh = or(char("h"))(char("H"))

// const parse_eE = or(char("e"))(char("E"))

// const HhEe = and(parse_Hh)(parse_eE)

// const contentList = ["hello", "Hello", "ello", "hEllo", "HEllo", "garbage"]

console.log(parser("   test")(skip_whitespace))
