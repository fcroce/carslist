import Component from '../Component.js';

export default class Vehicle extends Component {
  constructor(id, domParent) {
    super(id, domParent);

    this.rendering();
  }

  click() {
    document.router.push('/vehicle', [
      {
        name: 'code',
        value: this.dom.attributes.getNamedItem('code').value,
      },
    ]);
  }

  rendering() {
    if (!super.rendering()) {
      return false;
    }

    const vehicleIdx = this.getParam('vehicle');
    const vehicle = document.store.search.vehicles.availability[vehicleIdx];

    this.dom.classList.add('vehicle');

    this.dom.innerHTML = `
          <div class="vehicle-name text-1-bld">${vehicle.info.model.name}</div>
          <div class="vehicle-vendor small-1-reg" vendor-code="${vehicle.vendor.code}">${vehicle.vendor.name}</div>

          <img
            class="vehicle-img"
            src="${vehicle.info.pictureURL.resized(300).url}"
            alt="${vehicle.info.model.name}"
            title="${vehicle.info.model.name}"
          />

          <div class="vehicle-details-container" code-context="${vehicle.info.codeContext}">
            <div class="vehicle-features">
                ${vehicle.info.airCondition ? '<p class="veh-air-condition"><span>✔</span> Air Condition</p>' : ''}
                <p class="veh-transmission-type">Transmission Type: <span>${vehicle.info.transmissionType}</span></p>
                <p class="veh-fuel-type">Fuel Type: <span>${vehicle.info.fuelType}</span></p>
                <p class="veh-drive-type">Drive Type: <span>${vehicle.info.driveType}</span></p>
            </div>

            <div class="vehicle-info">
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/car-seat.svg" alt="Car seats" title="Car seats" />
                  ${vehicle.info.passengers}
                </p>
                
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/baggage.svg" alt="Baggage" title="Baggage" />
                  ${vehicle.info.baggageQty}
                </p>
                
                <p class="veh-car-info">
                  <img class="veh-icons" src="src/assets/svg/car-door.svg" alt="Baggage" title="Baggage" />
                  ${vehicle.info.doors}
                </p>
            </div>
          </div>
          
          <div class="summary">
            <div class="summary-price">
              <span class="text-1-bld">${vehicle.totalCharge.estimatedTotalAmount}</span>
              <span class="text-1-reg">${vehicle.totalCharge.currency.symbol}</span>
              <span class="summary-price-rate small-1-reg">
                Rates: ${vehicle.totalCharge.rateTotalAmount} ${vehicle.totalCharge.currency.symbol}
              </span>
            </div>

            <div class="veh-select">
                <button class="text-1-bld">Select</button>
            </div>
          </div>
        `;

    return this;
  }
}
