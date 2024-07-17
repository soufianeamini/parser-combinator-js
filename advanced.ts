import { char, fails, or } from "./primitives";

export const skip_char = (p: any) => (input: string) => fails(p(input)) ? [null, input] : ['', input.slice(1)]

export const skip_whitespace = or(or(skip_char(char(" ")))(skip_char(char("\n"))))(or(skip_char(char("\r")))(skip_char(char("\t"))))
