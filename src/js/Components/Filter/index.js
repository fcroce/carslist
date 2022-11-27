import Component from '../Component.js';

export default class Filter extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  click() {
    // @TODO - Do something with this event
    console.log('click event:', this.dom);
  }

  rendering() {
    super.rendering();

    this.dom.innerHTML = `
      <div class="filter">Filters</div>
    `;

    return this.dom;
  }
}
