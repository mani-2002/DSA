let text =
  "Create a function, that will return an array (of string), with the words inside the text";
var regex = /[A-Za-z]+/g;
var words = text.match(regex);
console.log(words);
