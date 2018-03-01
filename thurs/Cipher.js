function cipher(text, shift) {
    //turns alphabet into an array
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    var wordToEncrypt = text.split('');
    //result is the encrypted string
    var result = wordToEncrypt.map(function(character) {
      var indx = alphabet.indexOf(character.toUpperCase());
      var newIndx = indx + shift;
      if (newIndx >= alphabet.length) {
        newIndx -= 26;
      }
      return alphabet[newIndx];
    })

    return result.join("");

}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS', 13);

console.log(encrypted);
