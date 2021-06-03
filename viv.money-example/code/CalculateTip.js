var console = require('console')
module.exports.function = function calculateTip(tipPercent, billTotal) {

  let billTotalValue, currency, tipTotalValue

  tipPercent = tipPercent ? parseInt(tipPercent, 10) / 100 : null;
  billTotalValue = billTotal.value;
  currency = billTotal.currencyType;

  tipTotalValue = billTotalValue * tipPercent;

  return {
    currencyType: currency,
    value: tipTotalValue
  };
}
