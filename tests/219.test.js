const containsNearbyDuplicate = require('../algorithims/219-contains-duplicate-II')

test('returns true when indicies of duplicate elements subtract to the same value of the second param', () => {
  expect.assertions(1)
  const numArr = [1, 2, 3, 1]
  const actual = containsNearbyDuplicate(numArr, 3)

  expect(actual).toEqual(true)
})

test('returns true when indicies of duplicate elements subtract to a lesser value of the second param', () => {
  expect.assertions(1)
  const numArr = [4, 0, 1, 1]
  const actual = containsNearbyDuplicate(numArr, 2)

  expect(actual).toEqual(true)
})

test('returns false when subtracted indicies of duplicates are greater than the second param', () => {
  expect.assertions(1)
  const numArr = [1, 2, 3, 1, 2, 3]
  const actual = containsNearbyDuplicate(numArr, 2)

  expect(actual).toEqual(false)
})
