const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Array to store decoded characters

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    const decodedChar = lookup[char] || char; // Retrieve decoded character from lookup table, or keep the character unchanged if not found
    decodedArr.push(decodedChar);
  }

  return decodedArr.join(""); // Join the decoded characters into a string and return it
}

// Test example
console.log(rot13("SERR YBIR? NPPVBWBO")); // Output: "FREE LOVE? ACCIOSOBO"
