const { findLongestWord } = require('.');

const arr1 = ['there', 'are', 'words', 'in', 'this', 'string'];
const expected1 = 'string';

const arr2 = ['1', 'kick', 'tony', 'thomasfowler', 'andrew'];
const expected2 = 'thomasfowler';

const arr3 = [];
const expected3 = '';

const testCases = [
  {
    args: arr1,
    expected: expected1,
  },
  {
    args: arr2,
    expected: expected2,
  },
  {
    args: arr3,
    expected: expected3,
  },
];

describe('findLongestWord', () => {
  testCases.forEach((testCase, i) => {
    const {
      args,
      expected,
    } = testCase;

    describe(`test case ${i}`, () => {
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(findLongestWord(args)).toEqual(expected);
      })
    })
  })
});

