const fails = (tuple: any[]) => tuple[0] === null ? true : false

const parser = (input: string) => (p: any) => p(input)

const char = (c: string) => (input: string) => (input[0] === c ? [input[0], input.slice(1)] : [null, input])

const or = (p1: any) => (p2: any) => (input: string) => fails(p1(input)) ? p2(input) : p1(input)

const and = (p1: any) => (p2: any) => (input: string) => {
  const result1 = p1(input)
  if (fails(result1)) return [null, input]

  const result2 = p2(result1[1])
  if (fails(result2)) return [null, input]

  return [[result1[0], result2[0]], result2[1]]
}

const parse_string = (p: any) => (input: string) => {
  const result = p(input)
  if (fails(result)) return [null, input]

  const str = result[0].join("")
  return [str, result[1]]
}

const apply = (f: any) => (p: any) => (input: string) => fails(p(input)) ? [null, input] : f(p(input))

const parse_Hh = or(char("h"))(char("H"))

const parse_eE = or(char("e"))(char("E"))

const HhEe = and(parse_Hh)(parse_eE)

const contentList = ["hello", "Hello", "ello", "hEllo", "HEllo", "garbage"]

for (const content of contentList) {
  console.log(`Parsing with HhEe: ${content}`)
  console.log(parser(content)(HhEe))

  console.log(`Parsing with parse_string(HhEe): ${content}`)
  console.log(parser(content)(parse_string(HhEe)))

  console.log("")
}

