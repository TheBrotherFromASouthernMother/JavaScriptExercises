function posNums(arr) {
  array = arr.filter(function(num) {
    if (num > 0) {
      return num
    }
  })
  return array
}


var arr = [-1, -2, 5, 8, -77, 2, 43, -6, 66, 32, -56]

console.log(posNums(arr))
