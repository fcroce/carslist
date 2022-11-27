import { checkCurrencyFormat, getCurrency } from '../../libs/Currency/index.js';

export default class TotalCharge {
  constructor({ rateTotalAmount, estimatedTotalAmount, currencyCode }) {
    this.rateTotalAmount = checkCurrencyFormat(rateTotalAmount) ? rateTotalAmount : '0.00';
    this.estimatedTotalAmount = checkCurrencyFormat(estimatedTotalAmount) ? estimatedTotalAmount : '0.00';
    this.currency = getCurrency(currencyCode);
  }
}
