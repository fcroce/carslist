import Component from '../Component.js';

export default class Filter extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  rendering() {
    super.rendering();

    this.dom.innerHTML = `
      <div class="filter">TODO - Filters</div>
    `;

    return this.dom;
  }
}
