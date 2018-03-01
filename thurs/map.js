function map(arr, func) {
  array = []
  for (var i = 0; i < arr.length; i ++) {
    array.push(func(arr[i]))
  }
  return array
}


randomNumbers = [1, 5, 7]

console.log(map(randomNumbers, function(e) {
  return e * 2;
}))
