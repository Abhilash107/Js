// const sum = (a, b) => a + b;

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const sum = require('../sum');
const { expect } = require('chai');

describe('Sum function', () => {
  it('should add 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});

