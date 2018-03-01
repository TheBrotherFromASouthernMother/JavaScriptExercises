function sortArray(array) {
  sortedArrays = array.sort(function(curr, next) {
    if (curr.length < next.length ) {
      return 1;
    }
    if (curr.length > next.length) {
      return -1;
    }
    return 0;
  })

  console.log(sortedArrays)
  return sortedArrays
}
