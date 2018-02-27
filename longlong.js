function extendVowel(str) {
  extended = "";
  for (let i = 0; i < str.length; i ++) {
    extended += str[i];
    if (str[i] === str[i-1]) {
      extended += str[i];
      extended += str[i];
      extended += str[i];
    }
  }
  console.log(extended)
  return extended;
}


extendVowel('Good')


var count = 0;
while (count < 10) {


  count ++
  console.log(count)
}
