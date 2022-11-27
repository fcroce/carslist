import Component from '../Component.js';
import Vehicle from '../Vehicle/index.js';
import createCustomElement from '../../libs/CreateCustomElement/index.js';

export default class Vendor extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  async rendering() {
    super.rendering();

    const availabilityIdx = this.getParam('vehicles');
    const availability = document.store.search.vehicles.availability[availabilityIdx];

    let template = `
      <div class="vendor" vendor-code="${availability.vendor.code}">${availability.vendor.name}</div>
      
      <div class="vehicles"></div>
    `;

    let vehiclesDOM = '';
    availability.vehicles.map((list, idx) => {
      vehiclesDOM += `<vehicle
        code="${list.info.code}"
        name="${list.info.model.name}"
        vehicles="${availabilityIdx}"
        vehicle="${idx}"
        class="${list.available ? 'available' : ''}"
      ></vehicle>`;
    });

    template = template.replace('<div class="vehicles"></div>', `<div class="vehicles">${vehiclesDOM}</div>`);

    this.dom.innerHTML = template;

    await createCustomElement(this.dom, 'vehicle', Vehicle);

    return this.dom;
  }
}
