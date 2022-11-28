import Component from '../Component.js';
import sortAvailability from '../../libs/SortAvailability/index.js';

export default class Sort extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  change(event) {
    document.store.sort = event.target.value;
    sortAvailability(event.target.value, true);
  }

  rendering() {
    if (!super.rendering()) {
      return false;
    }

    this.dom.innerHTML = `
            <select name="sort" class="vehicle-sort">
              <option value="lowest-prices" ${document.store.sort === 'lowest-prices' ? 'selected' : ''}>
                Sort by Lowest Prices
              </option>

              <option value="highest-prices" ${document.store.sort === 'highest-prices' ? 'selected' : ''}>
                Sort by Highest Prices
              </option>

              <option value="vendor" ${document.store.sort === 'vendor' ? 'selected' : ''}>
                Sort by Vendor
              </option>
            </select>
        `;

    return this;
  }
}
