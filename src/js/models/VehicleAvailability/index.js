import Vehicle from '../Vehicle/index.js';
import TotalCharge from '../TotalCharge';

export default class VehicleAvailability {
  constructor({ status, info, totalCharge }) {
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
