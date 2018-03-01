var arr = [1,2,3];

function sumOfArray(array) {
  sum = array.reduce(function (accumlator, currVal) {
    return accumlator + currVal;
  })
  console.log(sum)
  return sum
}


sumOfArray(arr);
