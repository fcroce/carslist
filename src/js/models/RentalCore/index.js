import RentalLocation from '../RentalLocation/index.js';

export default class RentalCore {
  constructor({ pickUpDateTime, returnDateTime, pickUpLocation, returnLocation }) {
    this.pickupDateTime = new Date(pickUpDateTime ?? null);
    this.returnDateTime = new Date(returnDateTime ?? null);
    this.pickUpLocation = new RentalLocation(pickUpLocation ?? null);
    this.returnLocation = new RentalLocation(returnLocation ?? null);
  }
}
