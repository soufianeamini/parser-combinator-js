import { char, fails, many, or, parse_string } from "./primitives";

export const skip = (p: any) => (input: string) => {
  const result = p(input)
  if (fails(result)) return [null, input]

  return ['', result[1]]
}

export const skip_whitespace = or(or(skip(char(" ")))(skip(char("\n"))))(or(skip(char("\r")))(skip(char("\t"))))
export const skip_whitespaces = parse_string(many(skip_whitespace))

export const parse_alpha = (input: string) => {
  const [ch] = input

  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
    return [ch, input.slice(1)]

  return [null, input]
}

export const parse_underscore = char("_")

export const parse_digit = (input: string) => {
  const [ch] = input

  if (ch >= "0" && ch <= "9")
    return [ch, input.slice(1)]

  return [null, input]
}
