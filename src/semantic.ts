import {
  parse_alpha,
  parse_digit,
  parse_underscore,
  skip_whitespaces,
} from "./advanced"
import { and, many, opt, or, parse_string } from "./primitives"

const alpha_underscore = or(parse_alpha)(parse_underscore)
const alph_under_digit = or(alpha_underscore)(parse_digit)

const parse_ident_aux = parse_string(
  and(alpha_underscore)(parse_string(many(alph_under_digit)))
)
export const parse_ident = parse_string(
  and(opt(skip_whitespaces))(parse_ident_aux)
)
