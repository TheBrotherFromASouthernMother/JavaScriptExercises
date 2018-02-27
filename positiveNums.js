function findPositiveNumbers(arr) {
  let positiveNumbers = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i])
    }
  }
  console.log(positiveNumbers)
  return positiveNumbers
}



let array = [-1, 5, -3, 3, 0, -5]

findPositiveNumbers(array)
