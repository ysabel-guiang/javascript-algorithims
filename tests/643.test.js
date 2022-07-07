const findMaxAverage = require('../algorithims/643-maximum-average-subarray-I')

test('returns with a max average when given an array of intergers', () => {
  expect.assertions(1)
  const numArr = [5, 1, 6, 8, 1, 6, 12, 435, 62, 3, 5]
  const expected = 128.75
  const actual = findMaxAverage(numArr, 4)
  expect(actual).toEqual(expected)
})

test('returns with a max average when given an array with negative intergers', () => {
  expect.assertions(1)
  const numArr = [1, 12, -5, -6, 50, 3]
  const expected = 12.75
  const actual = findMaxAverage(numArr, 4)
  expect(actual).toEqual(expected)
})
