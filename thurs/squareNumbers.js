function squrNums(arr) {
  array = arr.map(function(val) {
    return Math.pow(val, 2)
  })
  return array
}


arr = [1, 2, 3]
console.log(squrNums(arr))
