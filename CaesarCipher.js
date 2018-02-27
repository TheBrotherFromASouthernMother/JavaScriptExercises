function cipher(str, shift) {
  string = str.toUpperCase();
  let encryptedString = [];
  let charToEncrypt = 0;
  let valuesNotToBeEncrypted = [" ", ".", ",", "!", "?"];
  for (let i = 0; i < string.length; i ++) {
    charToEncrypt = string[i]
    if (charToEncrypt !== " " && charToEncrypt !== ".") {
      charToEncrypt = string.charCodeAt(i)
      if (charToEncrypt + shift > 90) {
        charToEncrypt = (((charToEncrypt - 65) + shift) % 26) + 65;
      } else {
        charToEncrypt = charToEncrypt + shift;
      }
      encryptedString.push(String.fromCharCode(charToEncrypt))
    } else {
      encryptedString.push(charToEncrypt);
      }

  }
  encryptedString = encryptedString.join("")
  console.log(encryptedString)
}


module.exports.cipher = cipher;
