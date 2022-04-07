// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabetGrid = {
    A: 11,
    B: 21,
    C: 31,
    D: 41,
    E: 51,
    F: 12,
    G: 22,
    H: 32,
    I: 42,
    J: 42,
    K: 52,
    L: 13,
    M: 23,
    N: 33,
    O: 43,
    P: 53,
    Q: 14,
    R: 24,
    S: 34,
    T: 44,
    U: 54,
    V: 15,
    W: 25,
    X: 35,
    Y: 45,
    Z: 55,
  };

  const numberGrid = {
    11: "A",
    21: "B",
    31: "C",
    41: "D",
    51: "E",
    12: "F",
    22: "G",
    32: "H",
    42: "(I/J)",
    52: "K",
    13: "L",
    23: "M",
    33: "N",
    43: "O",
    53: "P",
    14: "Q",
    24: "R",
    34: "S",
    44: "T",
    54: "U",
    15: "V",
    25: "W",
    35: "X",
    45: "Y",
    55: "Z",
  };

  function encodeMessage(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toUpperCase();
      // convert letter to number
      const number = alphabetGrid[letter];
      result = result + number;
    }
    return result;
  }

  function decodeMessage(input) {
    let result = "";
    for (let i = 0; i < input.length; i += 2) {
      const number = input.slice(i, i + 2);
      // convert number to letter
      const letter = numberGrid[number];
      result = result + letter;
    }
    return result.toLowerCase();
  }

  function checkEvenCharacter(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length % 2 !== 0) {
        return false;
      }
    }
    return true;
  }

  function polybius(input, encode = true) {
    const tempArray = input.split(" ");
    let result = "";
    if (encode) {
      // go through each word in tempArray
      for (let i = 0; i < tempArray.length; i++) {
        const word = tempArray[i];
        const message = encodeMessage(word);
        result = result + message + " ";
      }
      return result.trim();
    } else {
      // check if total character is even when decoding, excluding spaces
      if (!checkEvenCharacter(tempArray)) return false;
      // go through each word in tempArray
      for (let i = 0; i < tempArray.length; i++) {
        const word = tempArray[i];
        const message = decodeMessage(word);
        result = result + message + " ";
      }
      return result.trim();
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
