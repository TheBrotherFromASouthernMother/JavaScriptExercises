function printBanner(str) {
  let firstOrLastRow = "";
  let banner = ""
  for (let i = 0; i < str.length + 2; i ++) {
    firstOrLastRow += "*"
    if (i === 0 || i === str.length + 1) {
      banner += "*"
    } else {
      banner += str[i-1]
    }
  }

  console.log(firstOrLastRow)
  console.log(banner);
  console.log(firstOrLastRow)

}


printBanner("My name is M'Baku leader of the Jabari")
