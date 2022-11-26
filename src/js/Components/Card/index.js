import Component from '../Component.js';

export default class Card extends Component {
  constructor(id, domParent) {
    super(id);

    this.dom = domParent.querySelector('card');

    this.bindAttributes(this.dom);

    this.template();
  }

  click() {
    console.log('click event');
  }

  template() {
    // @TODO: Handle data from Model
    this.dom.outerHTML = `<div id="${this.id}">
        card - ${this.getParam('title')}
    </div>`;

    return super.template();
  }
}
