function tipAmount (bill, service) {
  let tip = 0;
  if (service.toLowerCase() === "good") {
    tip = 0.20;
  } else if (service.toLowerCase() === "fair") {
      tip = 0.15;
  } else if (service.toLowerCase() === "bad") {
      tip = 0.10;
  }

  return bill * tip
}



module.exports.tipAmount = tipAmount;
