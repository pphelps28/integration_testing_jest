const { expect } = require('@jest/globals')
const asyncCalc = require('./asyncCalc')

test("async sum is good", () => {
  expect(asyncCalc.asyncSum(2, 6)).resolves.toBe(8)
})
test("async sub is good", () => {
  expect(asyncCalc.asyncSub(2, 6)).resolves.toBe(-4)
})
test("async mult is good", () => {
  expect(asyncCalc.asyncSum(2, 6)).resolves.toBe(12)
})
test("async div is good", () => {
  expect(asyncCalc.asyncSum(6, 2)).resolves.toBe(3)
})
test("async square is good", () => {
  expect(asyncCalc.asyncSum(6)).resolves.toBe(36)
})
test("async sqare root is good", () => {
  expect(asyncCalc.asyncSum(36)).resolves.toBe(6)
})