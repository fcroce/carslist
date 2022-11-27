export default class Vendor {
  constructor({ code, name }) {
    this.code = code ? parseInt(code, 10) : 0;
    this.name = name ?? 'Unknown';
  }
}
