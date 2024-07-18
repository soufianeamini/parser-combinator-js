import { char, or, parser } from "./primitives"

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
