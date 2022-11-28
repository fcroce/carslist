export default function garbageCollector() {
  Object.keys(document.components).map((element) => {
    if (document.getElementById(element) === null) {
      document.components[element].destroyEvents();
      delete document.components[element];
    }
  });
}
