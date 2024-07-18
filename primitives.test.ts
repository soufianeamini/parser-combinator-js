import { and, char, many, or, parser } from "./primitives"

describe("char", () => {
  test(`parses the character 'h' from "hello"`, () => {
    const p = char("h")
    const res = parser(p)("hello")
    expect(res).toStrictEqual(["h", "ello"])
  })

  test(`doesn't parse the character 'e' from "hello"`, () => {
    const p = char("e")
    const res = parser(p)("hello")
    expect(res).toStrictEqual([null, "hello"])
  })
})

describe("or", () => {
  test(`parses either 'h' or 'e' using or`, () => {
    const p = or(char("h"))(char("e"))
    const res1 = parser(p)("hello")
    expect(res1).toStrictEqual(["h", "ello"])

    const res2 = parser(p)("ello")
    expect(res2).toStrictEqual(["e", "llo"])
  })

  test(`doesn't parse 'h' or 'e' from "world"`, () => {
    const p = or(char("h"))(char("e"))
    const res = parser(p)("world")
    expect(res).toStrictEqual([null, "world"])
  })
})

describe("and", () => {
  test(`parses 'h' followed by 'e' using and`, () => {
    const p = and(char("h"))(char("e"))
    const res = parser(p)("hello")
    expect(res).toStrictEqual([["h", "e"], "llo"])
  })

  test(`doesn't parse if there's not 'h' strictly followed by 'e'`, () => {
    const p = and(char("h"))(char("e"))
    const res1 = parser(p)("yup")
    expect(res1).toStrictEqual([null, "yup"])

    const res2 = parser(p)("hup")
    expect(res2).toStrictEqual([null, "hup"])
  })
})

describe("many", () => {
  test(`parses 'e' many times and stops`, () => {
    const p = many(char("e"))
    const res = parser(p)("eeek")
    expect(res).toStrictEqual([["e", "e", "e"], "k"])
  })

  test(`doesn't parse a single 'e' and returns failure`, () => {
    const p = many(char("e"))
    const res = parser(p)("ayep")
    expect(res).toStrictEqual([null, "ayep"])
  })
})
