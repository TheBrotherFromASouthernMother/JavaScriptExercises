function makeLeet(str) {
  leetString = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (leetString[i].toUpperCase() === "A") {
      leetString[i] == "4";
    } else if (leetString[i].toUpperCase() === "E") {
      leetString[i] = "3";
    } else if (leetString[i].toUpperCase() === "G") {
      leetString[i] = "6";
    } else if (leetString[i].toUpperCase() === "I") {
      leetString[i] = "1";
    } else if (leetString[i].toUpperCase() === "O") {
      leetString[i] = "0";
    } else if (leetString[i].toUpperCase() === "S") {
      leetString[i] = "5";
    } else if (leetString[i].toUpperCase() === "T") {
      leetString[i] = "7";
    }
  }
  leetString = leetString.join("");
  console.log(leetString)
  return leetString;
}

makeLeet("leet")
