import RentalCore from '../../models/RentalCore/index.js';
import VendorAvailability from '../../models/VendorAvailability/index.js';

export default async function search() {
  let list = null;

  try {
    // @FIXME - CORS issues on http://www.cartrawler.com/ctabe/cars.json using localhost
    const response = await fetch('src/assets/list.json', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    list = extractSearchResults(await extractJson(response));
  } catch (error) {
    throw new Error(error);
  }

  return list;
}

const extractJson = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const extractSearchResults = (data) => {
  const results = {
    rental: {},
    vehicles: [],
  };

  if (data?.[0]?.['VehAvailRSCore']) {
    const availRSCore = data?.[0]?.['VehAvailRSCore'];

    results.rental = new RentalCore({
      pickUpDateTime: availRSCore?.['VehRentalCore']?.['@PickUpDateTime'],
      returnDateTime: availRSCore?.['VehRentalCore']?.['@ReturnDateTime'],
      pickUpLocation: availRSCore?.['VehRentalCore']?.['PickUpLocation'],
      returnLocation: availRSCore?.['VehRentalCore']?.['ReturnLocation'],
    });

    results.vehicles = new VendorAvailability(availRSCore?.['VehVendorAvails']);
  }

  return results;
};
