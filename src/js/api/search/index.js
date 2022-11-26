export default async function search() {
  try {
    // CORS issues on http://www.cartrawler.com/ctabe/cars.json - I moved the response to a local json file
    const response = await fetch('src/assets/list.json', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
