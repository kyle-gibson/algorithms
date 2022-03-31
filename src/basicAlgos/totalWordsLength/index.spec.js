const { totalWordsLength, _totalWordsLength } = require('.');

const arr1 = ['one', 'two', 'three'];
const expected1 = 11;

const arr2 = ['word', 'black', 'white', 'cat'];
const expected2 = 17;

const arr3 = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
const expected3 = 22;

const arr4 = [];
const expected4 = 0;

const testCases = [
  {
    args: arr1,
    expected: expected1,
  },
  {
    args: arr2,
    expected: expected2
  },
  {
    args: arr3,
    expected: expected3
  },
  {
    args: arr4,
    expected: expected4
  }

];

describe('total word length', () => {
  testCases.forEach((testCase, i) => {
    const {
      args,
      expected,
    } = testCase;

    describe(`test case ${i}`, () => {
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(totalWordsLength(args)).toEqual(expected);
      })
      //Combines everything in the array into a string (string concatenation)
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(_totalWordsLength(args)).toEqual(expected);
      })
    })
  })
});