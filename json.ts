import { between, char } from "./primitives";

export const parse_curly = (p: any) => between(char("{"))(p)(char("}"))

// export const parse_quotes = (p: any) => and()
