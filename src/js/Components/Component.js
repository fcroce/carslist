export default class Component {
  constructor(id) {
    this.id = id;
  }

  bindAttributes(dom) {
    this.attributes = dom.attributes;
  }

  getParam(name) {
    return this.attributes.getNamedItem(name).value;
  }

  bindEvents(dom) {
    dom.addEventListener('click', this.click);
  }

  click() {}

  template() {
    const dom = document.getElementById(`${this.id}`);

    this.bindEvents(dom);

    return dom;
  }
}
