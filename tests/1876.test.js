const countGoodSubstrings = require('../algorithims/1876-substrings-of-size-three-with-distinct-characters')

test('counts substrings in a short string with duplicates', () => {
  expect.assertions(1)

  const string = 'xyzzaz'
  expect(countGoodSubstrings(string)).toEqual(1)
})

test('counts substrings in a long string with duplicates', () => {
  expect.assertions(1)

  const string = 'aababcabc'
  expect(countGoodSubstrings(string)).toEqual(4)
})
