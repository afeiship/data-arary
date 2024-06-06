export interface DataArrayOptions {
  onChange?: (data: any[]) => void;
}

const simpleDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

class DataArray {
  private data: any[];
  private options: DataArrayOptions;

  constructor(data: any[], options?: any) {
    this.data = data;
    this.options = options;
  }

  public setData(data: any[]) {
    this.data = data;
    this.options.onChange?.(this.data);
  }

  public setOptions(options: DataArrayOptions) {
    this.options = options;
  }

  get length(): number {
    return this.data.length;
  }

  get keys(): number[] {
    return this.data.map((_, index) => index);
  }

  get values() {
    return this.data;
  }

  get isEmpty() {
    return this.data.length === 0;
  }

  first() {
    return this.isEmpty ? undefined : this.data[0];
  }

  last() {
    return this.isEmpty ? undefined : this.data[this.data.length - 1];
  }

  chunk(chunkSize: number) {
    const chunks: any[] = [];
    for (let i = 0; i < this.data.length; i += chunkSize) {
      chunks.push(this.data.slice(i, i + chunkSize));
    }
    return chunks;
  }

  merge(data: any[]) {
    this.data = this.data.concat(data);
    this.options.onChange?.(this.data);
  }

  clear() {
    this.data = [];
    this.options.onChange?.(this.data);
  }

  copy(isDeep?: boolean) {
    const data = isDeep ? simpleDeepCopy(this.data) : this.data;
    return new DataArray(data, this.options);
  }

  toggle(element: any) {
    const index = this.indexOf(element);
    if (index === -1) {
      this.push(element);
    } else {
      this.remove(index);
    }
  }

  remove(index: number) {
    this.splice(index, 1);
  }

  insert(index: number, element: any) {
    this.splice(index, 0, element);
  }

  has(element: any) {
    return this.data.includes(element);
  }

  indexOf(element: any) {
    return this.data.indexOf(element);
  }

  // ------------ methods with `onChange` option --------------
  push(element: any) {
    this.data.push(element);
    this.options.onChange?.(this.data);
  }

  pop() {
    this.data.pop();
    this.options.onChange?.(this.data);
  }

  unshift(element: any) {
    this.data.unshift(element);
    this.options.onChange?.(this.data);
  }

  shift() {
    this.data.shift();
    this.options.onChange?.(this.data);
  }

  splice(start: number, deleteCount?: number, item?: any) {
    this.data.splice(start, deleteCount || 0, item);
    this.options.onChange?.(this.data);
  }

  sort(compareFn?: (a: any, b: any) => number) {
    this.data.sort(compareFn);
    this.options.onChange?.(this.data);
  }

  reverse() {
    this.data.reverse();
    this.options.onChange?.(this.data);
  }
}

export default DataArray;
