import createCustomElement from './libs/CreateCustomElement/index.js';
import SearchList from './Components/SearchList/index.js';
import VehicleDetails from './Components/VehicleDetails/index.js';

export default async function main() {
  const domMain = document.querySelector('#main');

  // ⚙ Memory storage
  document.store = {
    domMain: domMain,
  };

  // Custom elements
  document.components = {};

  // Router
  document.router = {
    push(page, params = []) {
      const url = new URL(window.location);

      url.pathname = page;

      params.map((param) => {
        url.searchParams.set(param.name, param.value);
      });

      window.history.pushState({}, '', url);
      window.onpopstate();
    },

    page() {
      return new URL(window.location);
    },
  };

  // Pages
  window.onpopstate = async () => {
    // 📜 Homepage
    if (window.location.pathname === '/') {
      domMain.innerHTML = `<search-list />`;
      await createCustomElement(domMain, 'search-list', SearchList);
    }

    // 📜 Vehicle Details
    if (window.location.pathname === '/vehicle') {
      domMain.innerHTML = `<vehicle-details />`;
      await createCustomElement(domMain, 'vehicle-details', VehicleDetails);
    }
  };
  window.history.pushState({}, '', window.location.pathname);
  window.onpopstate();
}

window.addEventListener('load', main);
