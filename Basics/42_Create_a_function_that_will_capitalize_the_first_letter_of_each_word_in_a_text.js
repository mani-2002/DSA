function capitalizeFirstLetterInEachWord(line) {
  var s = "";
  for (let i = 0; i < line.length; i++) {
    if (i === 0 || line[i - 1] === " ") {
      s += line[i].toUpperCase();
    } else {
      s += line[i];
    }
  }
  return s;
}
var line =
  "create a function that will capitalize the first letter of each word in a text";
console.log(capitalizeFirstLetterInEachWord(line));
