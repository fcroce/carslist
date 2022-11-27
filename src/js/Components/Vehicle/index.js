import Component from '../Component.js';
// import createCustomElement from '../../libs/CreateCustomElement/index.js';

export default class Vehicle extends Component {
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

        const vehiclesIdx = this.getParam('vehicles');
        const vehicleIdx = this.getParam('vehicle');
        const vehicle = document.store.search.vehicles.availability[vehiclesIdx].vehicles[vehicleIdx];
        console.log('asd', vehicle)

        this.dom.innerHTML = `
          <img
            src="${vehicle.info.pictureURL.resized(300).url}"
            alt="${vehicle.info.model.name}"
            title="${vehicle.info.model.name}"
          />

          <div class="vehicle" code-context="${vehicle.info.codeContext}">
            <div>Model: ${vehicle.info.model.name}</div>
          
            <div>airCondition: ${vehicle.info.airCondition}</div>
            <div>transmissionType: ${vehicle.info.transmissionType}</div>
            <div>fuelType: ${vehicle.info.fuelType}</div>
            <div>driveType: ${vehicle.info.driveType}</div>
            <div>passengers: ${vehicle.info.passengers}</div>
            <div>baggageQty: ${vehicle.info.baggageQty}</div>
            <div>doors: ${vehicle.info.doors}</div>
          </div>
          
          <div class="summary">
            <div>rateTotalAmount: ${vehicle.totalCharge.rateTotalAmount} ${vehicle.totalCharge.currency.symbol}</div>
            <div>estimatedTotalAmount: ${vehicle.totalCharge.estimatedTotalAmount} ${vehicle.totalCharge.currency.symbol}</div>
          </div>
        `;

        return this.dom;
    }
}
