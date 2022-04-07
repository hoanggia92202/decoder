// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabetKey = {
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

  function encryptMessage(input, shift) {
    const newWord = [];
    for (let i = 0; i < input.length; i++) {
      // convert letter to lowercase
      const letter = input[i].toLowerCase();
      // if letter is not in the alphabet
      if (!letter.match(/[a-z]/)) {
        newWord.push(letter);
      } else {
        let keyPosition = alphabetKey[letter] + shift;
        // wrap at the en of the alphabet
        if (keyPosition > 26) {
          keyPosition = keyPosition - 26;
        }
        // shift the letter to the left
        else if (keyPosition < 1) {
          keyPosition = 26 + keyPosition;
        }
        const newLetter = numberKey[keyPosition];
        newWord.push(newLetter);
      }
    }
    return newWord;
  }

  function decryptMessage(input, shift) {
    const newWord = [];
    for (let i = 0; i < input.length; i++) {
      // convert letter to lowercase
      const letter = input[i].toLowerCase();
      // if letter is not in the alphabet
      if (!letter.match(/[a-z]/)) {
        newWord.push(letter);
      } else {
        let keyPosition = alphabetKey[letter] - shift;
        // shift letter to the left
        if (keyPosition < 1) {
          keyPosition = 26 + keyPosition;
        }
        // shift letter to the right
        else if (keyPosition > 26) {
          keyPosition = keyPosition - 26;
        }
        const newLetter = numberKey[keyPosition];
        newWord.push(newLetter);
      }
    }
    return newWord;
  }

  function caesar(input, shift, encode = true) {
    // return false, if shift argument is missing
    if (isNaN(shift)) {
      return false;
    } else if (shift === 0) {
      return false;
    } else if (shift < -25) {
      return false;
    } else if (shift > 25) {
      return false;
    } else if (encode) {
      const result = encryptMessage(input, shift);
      return result.join("");
    } else {
      const result = decryptMessage(input, shift);
      return result.join("");
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
