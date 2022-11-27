import search from '../../api/search/index.js';
import Component from '../Component.js';
import Vendor from '../Vendor/index.js';
import createCustomElement from '../../libs/CreateCustomElement/index.js';

export default class SearchList extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.fetchSearchList().then(() => {
      return this.rendering();
    });
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

  async fetchSearchList() {
    document.store.search = await search();
  }

  async rendering() {
    super.rendering();

    let template = `
      <div class="search-header">Search Results</div>
      <div class="search-pickup">
        <div>${document.store.search.rental.pickUpLocation.name}</div>
        <div>${document.store.search.rental.pickupDateTime}</div>
      </div>
      <div class="search-return">
        <div>${document.store.search.rental.returnLocation.name}</div>
        <div>${document.store.search.rental.returnDateTime}</div>
      </div>
      
      <div class="vendors"></div>
    `;

    let vendorsDOM = '';
    document.store.search.vehicles.availability.map((list, idx) => {
      vendorsDOM += `<vendor code="${list.vendor.code}" title="${list.vendor.name}" vehicles="${idx}" class="vendor"></vendor>`;
    });

    template = template.replace('<div class="vendors"></div>', `<div class="vendors loaded">${vendorsDOM}</div>`);

    this.dom.innerHTML = template;

    await createCustomElement(this.dom, 'vendor', Vendor);

    return this.dom;
  }
}
