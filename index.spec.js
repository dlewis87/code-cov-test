const { testFunction } = require('./index.js')

describe('index', () => {
  test('should return correct path for path 1', () => {
    const result = testFunction('path-1')

    expect(result).toEqual('path 1 return')
  });
});
