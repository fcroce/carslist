import Component from '../Component.js';

export default class Card extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  click(event) {
    // @TODO - Do something with this event
    console.log('click event:', event.target.title);
  }

  rendering() {
    super.rendering();

    // @TODO: Handle data from Model
    this.dom.innerHTML = `
        card - ${this.getParam('title')}
    `;

    return this.dom;
  }
}
