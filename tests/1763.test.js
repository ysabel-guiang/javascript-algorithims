const longestNiceSubstring = require('../algorithims/1763-longest-nice-substring')

test('returns a substring within a longer string', () => {
  expect.assertions(1)

  const string = 'YazaAay'

  expect(longestNiceSubstring(string)).toEqual('aAa')
})

test('returns the same string', () => {
  expect.assertions(1)

  const string = 'Bb'
  expect(longestNiceSubstring(string)).toEqual('Bb')
})

test('returns an empty string when there is no nice substrings', () => {
  expect.assertions(1)

  const string = 'c'
  expect(longestNiceSubstring(string)).toEqual('')
})
