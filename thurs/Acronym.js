var words = ['national', 'aeronautics', 'space', 'administration'];
var moreWords = ['very', 'important', 'person'];

function makeAcronym(arr) {
  acroynm = arr.reduce(function(accumlator, currVal) {
    if (accumlator === arr[0]) {
      accumlator = accumlator[0]
    }
    return accumlator + currVal[0];
  })

  console.log(acroynm)
  return acroynm;
}


makeAcronym(moreWords)
