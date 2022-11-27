export default async function search() {
  let list = null;

  try {
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
    availability: [],
  };

  if (data?.[0]?.['VehAvailRSCore']) {
    results.rental = data?.[0]?.['VehAvailRSCore']['VehRentalCore'];
    results.availability = data?.[0]?.['VehAvailRSCore']['VehVendorAvails'];
  }

  return results;
};
