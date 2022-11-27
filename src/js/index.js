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
}

window.addEventListener('load', main);
