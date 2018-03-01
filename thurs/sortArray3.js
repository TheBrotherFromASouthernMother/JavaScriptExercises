
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

//function to feed into reduce (I think this acts as a closure)
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sortArray(array) {
  sortedArrays = array.sort(function(curr, next) {

    //reduces the values within each array into a single value
    curr = curr.reduce(reducer)
    next = next.reduce(reducer)

    //compares the values of the arrays and sorts them based on inequality
    if (curr < next ) {
      return -1;
    }
    if (curr > next) {
      return 1;
    }
    return 0;
  })

  console.log(sortedArrays)
  return sortedArrays
}

sortArray(arr)
