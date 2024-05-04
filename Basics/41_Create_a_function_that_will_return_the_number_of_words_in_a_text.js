function returnNoOfWordsInText(text){
    var words = text.trim().split(/\s+/);
    return words.length
}
console.log(returnNoOfWordsInText('         java          b         '));