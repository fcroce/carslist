import VehicleModel from '../VehicleModel';
import VehiclePicture from '../VehiclePicture';

const TransmissionTypes = ['automatic'];

const FuelTypes = ['petrol'];

const DriveTypes = ['unspecified'];

export default class Vehicle {
  constructor({
    code,
    codeContext,
    airCondition,
    transmissionType,
    fuelType,
    driveType,
    passengers,
    baggageQty,
    doors,
    model,
    pictureURL,
  }) {
    transmissionType = transmissionType?.toLowerCase() ?? null;
    fuelType = fuelType?.toLowerCase() ?? null;
    driveType = driveType?.toLowerCase() ?? null;

    this.code = code?.toLowerCase() ?? 'Unknown';
    this.codeContext = codeContext?.toLowerCase() ?? 'Unknown';
    this.airCondition = airCondition === 'true';
    this.transmissionType = TransmissionTypes.includes(transmissionType) ? transmissionType : 'Unknown';
    this.fuelType = FuelTypes.includes(fuelType) ? fuelType : 'Unknown';
    this.driveType = DriveTypes.includes(driveType) ? driveType : 'Unknown';
    this.passengers = passengers ?? 'Unknown';
    this.baggageQty = baggageQty ? parseInt(baggageQty, 10) : 0;
    this.doors = doors ? parseInt(doors, 10) : 0;
    this.model = new VehicleModel(model?.['@Name']);
    this.pictureURL = new VehiclePicture(pictureURL);
  }
}
