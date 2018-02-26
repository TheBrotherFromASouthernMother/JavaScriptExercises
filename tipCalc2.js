const tipAmount = require('./tipCalc.js').tipAmount;

function calcBill(bill, service) {
  return bill + tipAmount(bill, service)
}


console.log(calcBill(100, 'good'))
