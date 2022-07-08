const divisorSubstrings = require('../algorithims/2269-find-the-k-beauty-of-a-number')

test('returns the k beauty in low numbers', () => {
  expect.assertions(1)
  const num = 240
  const expected = 2
  expect(divisorSubstrings(num, 2)).toEqual(expected)
})

test('returns the k beauty in high numbers', () => {
  expect.assertions(1)
  const num = 430043
  const expected = 2
  expect(divisorSubstrings(num, 2)).toEqual(expected)
})
