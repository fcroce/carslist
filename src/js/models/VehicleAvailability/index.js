import Vehicle from '../Vehicle/index.js';
import TotalCharge from '../TotalCharge/index.js';

export default class VehicleAvailability {
  constructor({ vendor, status, info, totalCharge }) {
    this.vendor = vendor;
    this.available = status === 'Available';
    this.info = new Vehicle({
      code: info?.['@Code'],
      codeContext: info?.['@CodeContext'],
      airCondition: info?.['@AirConditionInd'],
      transmissionType: info?.['@TransmissionType'],
      fuelType: info?.['@FuelType'],
      driveType: info?.['@DriveType'],
      passengers: info?.['@PassengerQuantity'],
      baggageQty: info?.['@BaggageQuantity'],
      doors: info?.['@DoorCount'],
      model: info?.['VehMakeModel'],
      pictureURL: info?.['PictureURL'],
    });
    this.totalCharge = new TotalCharge({
      rateTotalAmount: totalCharge?.['@RateTotalAmount'],
      estimatedTotalAmount: totalCharge?.['@EstimatedTotalAmount'],
      currencyCode: totalCharge?.['@CurrencyCode'],
    });
  }
}
