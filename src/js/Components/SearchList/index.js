import search from '../../api/search/index.js';
import Component from '../Component.js';
import Sort from '../Sort/index.js';
import Filter from '../Filter/index.js';
import Vehicle from '../Vehicle/index.js';
import createCustomElement from '../../libs/CreateCustomElement/index.js';
import sortAvailability from '../../libs/SortAvailability/index.js';

export default class SearchList extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.fetchSearchList().then(() => {
      sortAvailability();
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
    if (!super.rendering()) {
      return false;
    }

    let vehiclesDOM = '';
    document.store.search.vehicles.availability.map((list, idx) => {
      vehiclesDOM += `<vehicle
        code="${list.vendor.code}-${list.info.code}"
        name="${list.info.model.name}"
        vehicle="${idx}"
        class="${list.available ? 'available' : ''}"
      ></vehicle>`;
    });

    this.dom.innerHTML = `
      <div class="search-header title-1-bld">Search Results</div>

      <div class="search-info">
        <div class="search-pickup">
          <div class="text-1-bld">${document.store.search.rental.pickUpLocation.name}</div>

          <div class="search-pickup-date">
            ${new Intl.DateTimeFormat('en', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(document.store.search.rental.pickupDateTime)}
          </div>
        </div>

        <div class="search-return">
          <div class="text-1-bld">${document.store.search.rental.returnLocation.name}</div>

          <div class="search-pickup-date">
            ${new Intl.DateTimeFormat('en', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(document.store.search.rental.returnDateTime)}
          </div>
        </div>
      </div>
      
      <div class="search-tools">
        <sort></sort>
        <filter></filter>
      </div>
      
      <div class="vehicles">${vehiclesDOM}</div>
    `;

    await createCustomElement(this.dom, 'sort', Sort);
    await createCustomElement(this.dom, 'filter', Filter);
    await createCustomElement(this.dom, 'vehicle', Vehicle);

    return this.dom;
  }
}
