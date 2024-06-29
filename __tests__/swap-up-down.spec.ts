import DataArray from '../src';

// $ bun test __tests__/swap-up-down.spec.ts

describe('bases methods', () => {
  test('swap', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    data.swap(0, 4);
    expect(data.values).toEqual([5, 2, 3, 4, 1]);
  });

  test('swapEdge', () => {
    const data1 = new DataArray([1, 2, 3, 4, 5]);
    data1.swapEdge();
    expect(data1.values).toEqual([5, 2, 3, 4, 1]);

    const data2 = new DataArray([1, 2]);
    data2.swapEdge();
    expect(data2.values).toEqual([2, 1]);
  });

  // up
  test('up', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    data.up(1);
    expect(data.values).toEqual([2, 1, 3, 4, 5]);

    // zero will not move
    data.up(0);
    expect(data.values).toEqual([2, 1, 3, 4, 5]);
  });

  // down
  test('down', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    data.down(1);
    expect(data.values).toEqual([1, 3, 2, 4, 5]);
  });

  // continuous
  test('continuous up', () => {
    const data = new DataArray([1, 2, 3, 4, 5], { continuous: true });
    data.up(1);
    expect(data.values).toEqual([2, 1, 3, 4, 5]);

    // zero up
    data.up(0);
    expect(data.values).toEqual([1, 3, 4, 5, 2]);
    data.up(2);
    expect(data.values).toEqual([1, 4, 3, 5, 2]);
  });

  test('continuous down', () => {
    const data = new DataArray([1, 2, 3, 4, 5], { continuous: true });
    data.down(1);
    expect(data.values).toEqual([1, 3, 2, 4, 5]);
    data.down(0);
    expect(data.values).toEqual([3, 1, 2, 4, 5]);
    data.down(2);
    expect(data.values).toEqual([3, 1, 4, 2, 5]);

    // last down
    data.down(4);
    expect(data.values).toEqual([5, 3, 1, 4, 2]);
  });
});
