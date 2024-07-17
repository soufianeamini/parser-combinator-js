export const fails = (tuple: any[]) => tuple[0] === null ? true : false

export const parser = (input: string) => (p: any) => p(input)

export const char = (c: string) => (input: string) => (input[0] === c ? [input[0], input.slice(1)] : [null, input])

export const or = (p1: any) => (p2: any) => (input: string) => fails(p1(input)) ? p2(input) : p1(input)

export const and = (p1: any) => (p2: any) => (input: string) => {
  const result1 = p1(input)
  if (fails(result1)) return [null, input]

  const result2 = p2(result1[1])
  if (fails(result2)) return [null, input]

  return [[result1[0], result2[0]], result2[1]]
}

export const opt = (p: any) => (input: string) => {
  const result = p(input)
  if (fails(result)) return ['', input]

  return [result[0], result[1]]
}

export const parse_string = (p: any) => (input: string) => {
  const result = p(input)
  if (fails(result)) return [null, input]

  const str = result[0].join("")
  return [str, result[1]]
}

export const apply = (f: any) => (p: any) => (input: string) => fails(p(input)) ? [null, input] : f(p(input))

export const many = (p: any) => (input: string) => {
  let resultList: any[] | null = []
  let newInput = input
  let result: any

  while (!fails(p(newInput))) {
    [result, newInput] = p(newInput)
    resultList.push(result)
  }

  if (resultList.length === 0)
    resultList = null

  return [resultList, newInput]
}
