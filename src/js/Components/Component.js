import garbageCollector from '../libs/GarbageCollector/index.js';

export default class Component {
  constructor(id, domParent) {
    this.id = id;
    this.dom = domParent;
  }

  clearDom() {
    Array.from(this.dom.children).map((child) => {
      child.remove();
      delete document.components[child.id];
    });
  }

  bindAttributes() {
    this.attributes = this.dom.attributes;
  }

  bindClasses() {
    this.classes = this.dom.classList;
  }

  getParam(name) {
    return this.attributes.getNamedItem(name).value;
  }

  bindEvents() {
    this.destroyEvents();

    this.clickEvent = (event) => {
      this.click(event);
    };
    this.dom.addEventListener('click', this.clickEvent);

    this.changeEvent = (event) => {
      this.change(event);
    };
    this.dom.addEventListener('change', this.changeEvent);
  }

  destroyEvents() {
    this.dom.removeEventListener('click', this.clickEvent);
    this.dom.removeEventListener('change', this.changeEvent);
  }

  click() {}

  change() {}

  rendering() {
    garbageCollector();

    this.dom = document.getElementById(`${this.id}`);

    if (!this.dom) {
      console.info(`Element ${this.id} not found - Skipping rendering`);
      return false;
    }

    this.clearDom();

    this.bindAttributes();

    this.bindClasses();

    this.bindEvents();

    return this;
  }
}
