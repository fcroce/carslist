export default function sortAvailability(order, refreshList = false) {
  switch (order) {
    case 'lowest-prices':
      lowestPrices();
      break;
    case 'highest-prices':
      highestPrices();
      break;
    case 'vendor':
      vendorName();
      break;
    default:
      lowestPrices();
  }

  if (refreshList) {
    document.dispatchEvent(new Event('reload-search-list'));
  }
}

const lowestPrices = () => {
  document.store.search.vehicles.availability.sort(
    (a, b) => parseFloat(a.totalCharge.estimatedTotalAmount) - parseFloat(b.totalCharge.estimatedTotalAmount)
  );
};

const highestPrices = () => {
  document.store.search.vehicles.availability.sort(
    (a, b) => -(parseFloat(a.totalCharge.estimatedTotalAmount) - parseFloat(b.totalCharge.estimatedTotalAmount))
  );
};

const vendorName = () => {
  document.store.search.vehicles.availability.sort((a, b) => a.vendor.name.localeCompare(b.vendor.name));
};
