import createCustomElement from './libs/CreateCustomElement/index.js';
import SearchList from './Components/SearchList/index.js';

export default async function main() {
  const domMain = document.querySelector('#main');

  // Memory storage
  document.store = {
    domMain: domMain,
  };

  // Custom elements
  document.store.elements = {};

  await createCustomElement(domMain, 'search-list', SearchList);

  // @TODO - Delete Me - Sort list example
  // document.store.search.availability.sort((a, b) => -a['Vendor']['@Name'].localeCompare(b['Vendor']['@Name']));
  // document.dispatchEvent(new Event('reload-search-list'));
}

window.addEventListener('load', main);
