function printSqr(numRows) {
  row = ""
  for (let i = 0; i < numRows; i ++) {
    row += "*"
  }
  for (let j = 0; j < numRows; j ++) {
    console.log(row)
  }

}

printSqr(8)
