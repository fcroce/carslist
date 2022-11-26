import search from '../../api/search/index.js';
import Component from '../Component.js';

export default class SearchList extends Component {
  constructor(id, domParent) {
    super(id);

    this.dom = domParent.querySelector('search-list');

    this.bindAttributes(this.dom);

    search().then((list) => {
      document.store.search = list;
    });

    return this.template();
  }

  template() {
    // @TODO: Link Model
    this.dom.outerHTML = `<div id="${this.id}">
        <card title="Test 123" />
    </div>`;

    return super.template();
  }
}
