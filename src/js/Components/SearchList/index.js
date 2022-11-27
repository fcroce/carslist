import search from '../../api/search/index.js';
import Component from '../Component.js';
import Card from '../Card/index.js';
import createCustomElement from '../../libs/CreateCustomElement/index.js';

export default class SearchList extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    return this.rendering();
  }

  async reloadList() {
    await this.rendering();
  }

  bindEvents() {
    super.bindEvents();

    this.reloadListEvent = async () => {
      await this.reloadList();
    };
    document.addEventListener('reload-search-list', this.reloadListEvent);
  }

  destroyEvents() {
    super.destroyEvents();

    document.removeEventListener('reload-search-list', this.reloadListEvent);
  }

  async rendering() {
    super.rendering();

    if (!document.store.search) {
      document.store.search = await search();
    }

    let cards = '';
    document.store.search.vehicles.availability.map((list) => {
      cards += `<card code="${list.vendor.code}" title="${list.vendor.name}"></card>`;
    });

    this.dom.innerHTML = cards;

    await createCustomElement(this.dom, 'card', Card);

    return this.dom;
  }
}
