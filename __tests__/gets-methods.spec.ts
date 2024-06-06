import DataArray from '../src';

describe('gets methods', () => {
  test('first: normal usage', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.first()).toBe(1);
  });

  test('first: empty array', () => {
    const data = new DataArray([]);
    expect(data.first()).toBe(undefined);
  });

  test('last: normal usage', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.last()).toBe(5);
  });

  test('last: empty array', () => {
    const data = new DataArray([]);
    expect(data.last()).toBe(undefined);
  });

  test('get: normal arg', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.get(2)).toBe(3);
  });

  test('get: undefined args', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.get()).toEqual([1, 2, 3, 4, 5]);
  });

  test('get: out of range', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.get(10)).toBe(undefined);
  });

  test('get: negative index', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    expect(data.get(-1)).toBe(5);
    expect(data.get(-2)).toBe(4);
    expect(data.get(-3)).toBe(3);
    expect(data.get(-4)).toBe(2);
    expect(data.get(-5)).toBe(1);
  });
});
