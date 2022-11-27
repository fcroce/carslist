import { checkCurrencyFormat, getCurrency } from '../../libs/Currency/index.js';

export default class TotalCharge {
  constructor({ rateTotalAmount, estimatedTotalAmount, currencyCode }) {
    this.rateTotalAmount = checkCurrencyFormat(rateTotalAmount);
    this.estimatedTotalAmount = checkCurrencyFormat(estimatedTotalAmount);
    this.currency = getCurrency(currencyCode); // @TODO
  }
}
