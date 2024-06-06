import DataArray from '../src';

describe('bases methods', () => {
  // push
  test('push method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // push 1 element, should trigger change event
    dataArray.push(4);
    expect(dataArray.length).toBe(4);
    expect(count).toBe(1);
  });
  // pop
  test('pop method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);


    // pop 1 element, should trigger change event
    dataArray.pop();
    expect(dataArray.length).toBe(2);
    expect(count).toBe(1);
  });
  // shift
  test('shift method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // shift 1 element, should trigger change event
    dataArray.shift();
    expect(dataArray.length).toBe(2);
    expect(count).toBe(1);
  });
  // unshift
  test('unshift method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // unshift 1 element, should trigger change event
    dataArray.unshift(0);
    expect(dataArray.length).toBe(4);
    expect(count).toBe(1);
  });
  // splice
  test('splice method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // splice 1 element, should trigger change event
    dataArray.splice(1, 1, 4);
    expect(dataArray.length).toBe(3);
    expect(count).toBe(1);
  });

  // sort

  test('sort method', () => {
    const array = [3, 1, 2];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // sort 1 element, should trigger change event
    dataArray.sort((a, b) => b - a);
    expect(dataArray.length).toBe(3);
    expect(count).toBe(1);
  });

  // reverse
  test('reverse method', () => {
    const array = [1, 2, 3];
    let count = 0;
    const dataArray = new DataArray(array, { onChange: () => count++ });
    expect(dataArray.length).toBe(3);
    expect(count).toBe(0);

    // reverse 1 element, should trigger change event
    dataArray.reverse();
    expect(dataArray.length).toBe(3);
    expect(count).toBe(1);
  });
});
