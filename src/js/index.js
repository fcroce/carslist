import SearchList from './Components/SearchList/index.js';
import Card from './Components/Card/index.js';

export default function main() {
  const domMain = document.querySelector('#main');

  // Memory store
  document.store = {};

  // Custom elements
  const elements = {};

  elements['SearchList'] = { id: crypto.randomUUID() };
  const searchList = new SearchList(elements['SearchList'].id, domMain);

  elements['Card'] = { id: crypto.randomUUID() };
  new Card(elements['Card'].id, searchList);
}

window.addEventListener('load', main);
