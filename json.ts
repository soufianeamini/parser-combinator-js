import { skip_whitespaces } from "./advanced";
import { and, around, between, char, opt, parse_string } from "./primitives";
import { parse_ident } from "./semantic";

/**
 * Utility parser to remove a whitespace from a parser result
 */
const wtspc = (p: any) => parse_string(and(opt(skip_whitespaces))(p))

const curly = (p: any) => between(char("{"))(p)(wtspc(char("}")))

const quotes = (p: any) => between(char("\""))(p)(char("\""))

const json_string = wtspc(quotes(parse_ident))

const colons = wtspc(char(":"))

const json_key_value = around(json_string)(colons)(json_string)

export const parse_json = curly(json_key_value)
