// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const baseAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const numberKey = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  function encodeMessage(input, alphabet) {
    let message = "";
    for (let i = 0; i < input.length; i++) {
      const inputLetter = input[i];
      // convert letter to number
      const baseAlphabetNumber = baseAlphabet[inputLetter];
      // convert to encrypted letter
      const encryptLetter = alphabet[baseAlphabetNumber - 1];
      message = message + encryptLetter;
    }
    return message;
  }

  function decodeMessage(input, alphabet) {
    let message = "";
    for (let i = 0; i < input.length; i++) {
      const inputLetter = input[i];
      // get location of encrypted letter
      const encryptAlphabetLocation = alphabet.indexOf(inputLetter);
      // get decrypted letter
      const decryptLetter = numberKey[encryptAlphabetLocation + 1];
      message = message + decryptLetter;
    }
    return message;
  }

  // check and return false if the alphabet is not unique
  function unique(alphabet) {
    const originalArray = alphabet.split("");
    const uniqueArray = new Set(originalArray).size;
    return uniqueArray !== originalArray.length;
  }

  function substitution(input, alphabet, encode = true) {
    const wordArray = input.split(" ");
    let result = "";
    if (!alphabet) {
      return false;
    } else if (alphabet.length !== 26) {
      return false;
    } else if (unique(alphabet)) {
      return false;
    } else if (encode) {
      for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i].toLowerCase();
        const res = encodeMessage(word, alphabet);
        result = result + res + " ";
      }
      return result.trim();
    } else {
      for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i].toLowerCase();
        const res = decodeMessage(word, alphabet);
        result = result + res + " ";
      }
      return result.trim();
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
