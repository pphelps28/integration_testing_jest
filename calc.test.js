const { expect } = require('@jest/globals')
const calc = require('./calc')

test("Sum function works", () => {
  expect(calc.sum(1, 2)).toBe(3)
})

test('Sub function works', () => {
  expect(calc.sub(2, 3)).toBe(-1)
})

test('Mult function works', () => {
  expect(calc.mult(2, 3)).toBe(6)
})

test('objects are equal', () => {
  expect({ a: 1 }).toEqual({ a: 1 })
})