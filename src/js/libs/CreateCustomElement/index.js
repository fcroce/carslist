function createElement(element, id) {
  const div = document.createElement('div');
  div.id = id;
  for (const attribute of element.attributes) {
    if (attribute.nodeName === 'id') {
      break;
    }
    div.setAttribute(attribute.nodeName, attribute.nodeValue);
  }

  return div;
}

export default async function createCustomElement(dom, elName, elClass) {
  for (const element of dom.querySelectorAll(elName)) {
    const id = crypto.randomUUID();
    const newEl = createElement(element, id);

    element.outerHTML = newEl.outerHTML;
    document.store.elements[id] = await new elClass(id, element);
  }
}
