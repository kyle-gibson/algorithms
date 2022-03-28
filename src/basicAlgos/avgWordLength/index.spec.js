const { avgWordLength } = require('.');

const arr1 = ['one', 'two', 'three'];
const expected1 = 3;

const arr2 = ['word', 'black', 'white', 'cat'];
const expected2 = 4;

const arr3 = ['right', 'wrong', 'john', 'andy', 'kickton'];
const expected3 = 5;

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
  }

];

describe('average word length', () => {
  testCases.forEach((testCase, i) => {
    const {
      args,
      expected,
    } = testCase;

    describe(`test case ${i}`, () => {
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(avgWordLength(args)).toEqual(expected);
      })
    })
  })
});

