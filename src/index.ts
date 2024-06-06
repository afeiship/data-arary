export interface DataArrayOptions {
  onChange?: (data: any[]) => void;
}

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
    const indexes: number[] = [];
    for (let i = 0; i < this.data.length; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  get values() {
    const values: any[] = [];
    for (let i = 0; i < this.data.length; i++) {
      values.push(this.data[i]);
    }
    return values;
  }

  copyShallow() {
  }

  copyDeep() {
  }

  toggle(element: any) {
  }

  remove(index: number) {
  }

  push(element: any) {
  }

  pop() {
  }

  unshift(element: any) {
  }

  shift() {
  }

  splice(start: number, deleteCount?: number, item?: any) {
    this.data.splice(start, deleteCount || 0, item);
    this.options.onChange?.(this.data);
  }
}

export default DataArray;
