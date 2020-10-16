const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arrayExpr = expr.split(/(.{10})/).filter((O) => O);
  const rezStr = arrayExpr
    .map((itemExpr) => {
      let letterMorze = itemExpr.replace(/00/g, "");
      letterMorze = letterMorze.replace(/10/g, ".");
      letterMorze = letterMorze.replace(/11/g, "-");
      return letterMorze === "**********" ? " " : MORSE_TABLE[letterMorze];
    })
    .join("");
  return rezStr;
}

module.exports = {
  decode,
};
