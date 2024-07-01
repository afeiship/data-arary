import DataArray from '../src';

// bun test __tests__/unique.spec.ts
describe('unique methods', () => {
  test('should return unique values', () => {
    const data = new DataArray([1, 2, 3, 2, 1, 4]);
    data.unique();
    expect(data.values).toEqual([1, 2, 3, 4]);
  });


  test('should return unique values with custom key function', () => {
    const data = new DataArray([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Jane' },
    ]);
    data.uniqueBy((item) => item.name);
    expect(data.values).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });
});
