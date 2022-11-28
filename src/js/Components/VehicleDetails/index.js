import Component from '../Component.js';

export default class VehicleDetails extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    if (!document.store.search) {
      document.router.push('/');
      return;
    }

    const code = document.router.page().searchParams.get('code').split('-');
    this.vehicle = document.store.search.vehicles.availability
      .filter((vehicle) => {
        return vehicle.vendor?.code?.toString() === code[0] && vehicle.info.code.toString() === code[1];
      })
      .pop();

    if (!this.vehicle) {
      document.router.push('/');
      return;
    }

    this.rendering();
  }

  rendering() {
    if (!super.rendering()) {
      return false;
    }

    this.updateDom(`
      <h1 class="vehicle-page-header title-1-bld">${this.vehicle.info.model.name}</h1>
      
      <div class="vehicle-page-container">
        <img
            class="vehicle-page-img"
            src="${this.vehicle.info.pictureURL.generateUrl(this.vehicle.info.pictureURL.url).resized(600).url}"
            alt="${this.vehicle.info.model.name}"
            title="${this.vehicle.info.model.name}"
        />
      
        <div class="vehicle-page-info" code-context="${this.vehicle.info.codeContext}">
            <div class="vehicle-features">
                ${this.vehicle.info.airCondition ? '<p class="veh-air-condition"><span>✔</span> Air Condition</p>' : ''}
                <p class="veh-transmission-type">Transmission Type: <span>${
                  this.vehicle.info.transmissionType
                }</span></p>
                <p class="veh-fuel-type">Fuel Type: <span>${this.vehicle.info.fuelType}</span></p>
                <p class="veh-drive-type">Drive Type: <span>${this.vehicle.info.driveType}</span></p>
            </div>

            <div class="vehicle-info">
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/car-seat.svg" alt="Car seats" title="Car seats" />
                  ${this.vehicle.info.passengers}
                </p>
                
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/baggage.svg" alt="Baggage" title="Baggage" />
                  ${this.vehicle.info.baggageQty}
                </p>
                
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/car-door.svg" alt="Baggage" title="Baggage" />
                  ${this.vehicle.info.doors}
                </p>
            </div>
        </div>
      </div>
    
      <div class="vehicle-page-summary">
          <span class="text-1-bld">${this.vehicle.totalCharge.estimatedTotalAmount}</span>
          <span class="text-1-reg">${this.vehicle.totalCharge.currency.symbol}</span>
          <span class="summary-price-rate small-1-reg">
            Rates: ${this.vehicle.totalCharge.rateTotalAmount} ${this.vehicle.totalCharge.currency.symbol}
          </span>
      </div>
    `);

    return this;
  }
}
