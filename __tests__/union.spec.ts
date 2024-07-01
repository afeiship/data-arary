import DataArray from '../src';

// bun test __tests__/union.spec.ts
describe('union methods', () => {
  test('should return a new DataArray with the union of the two arrays', () => {
    const arr1 = new DataArray([1, 2, 3]);
    arr1.union([2, 3, 4]);
    expect(arr1.values).toEqual([1, 2, 3, 4]);
  });

  test('should return a new DataArray with the union of the two arrays with duplicates and non-numeric values', () => {
    const arr1 = new DataArray(['a', 'b', 'c']);
    arr1.union(['b', 'c', 'd', 'b']);
    expect(arr1.values).toEqual(['a', 'b', 'c', 'd']);
  });
});
