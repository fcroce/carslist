export default class RentalLocation {
  constructor(location) {
    this.name = location?.['@Name'] ?? 'Unknown';
  }
}
