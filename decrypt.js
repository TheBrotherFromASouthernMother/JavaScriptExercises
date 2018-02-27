const caesarCipher = require('./caesarCipher').cipher;

function decrypt(string) {
  for (let j = 0; j < 26; j ++) {
    caesarCipher(string, j)
  }
}

decrypt('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');
