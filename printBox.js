function printBox(length = 4, height = 4) {
  let firstOrLastRow = "";
  let middleRows = "";
  for (let i = 0; i < length; i ++) {
    firstOrLastRow += "*"
    if (i === 0 || i === length-1) {
      middleRows += "*"
    } else {
      middleRows += " "
    }
  }

  for (let j = 0; j < height; j ++) {
    if (j === 0 || j === height-1) {
      console.log(firstOrLastRow)
    } else {
      console.log(middleRows)
    }
  }

}


printBox(8,8)
