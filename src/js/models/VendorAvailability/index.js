import Vendor from '../Vendor/index.js';
import VehicleAvailability from '../VehicleAvailability/index.js';

export default class VendorAvailability {
  constructor(availability) {
    this.availability = [];

    if (!availability) {
      return;
    }

    availability.map((availability) => {
      const vehiclesAvailable = availability?.['VehAvails'] ?? [];

      vehiclesAvailable.map((vehicle) =>
        this.availability.push(
          new VehicleAvailability({
            vendor: new Vendor({
              code: availability?.['Vendor']?.['@Code'],
              name: availability?.['Vendor']?.['@Name'],
            }),
            status: vehicle?.['@Status'],
            info: vehicle?.['Vehicle'],
            totalCharge: vehicle?.['TotalCharge'],
          })
        )
      );
    });
  }
}
