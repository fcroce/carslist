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

      this.availability.push({
        vendor: new Vendor({
          code: availability?.['Vendor']?.['@Code'],
          name: availability?.['Vendor']?.['@Name'],
        }),
        vehicles: vehiclesAvailable.map(
          (vehicle) =>
            new VehicleAvailability({
              status: vehicle?.['@Status'],
              info: vehicle?.['Vehicle'],
              totalCharge: vehicle?.['TotalCharge'],
            })
        ),
      });
    });
  }
}
