function countLetters(sentence){
  var input = sentence.split(" ").join("").toLowerCase();
  var output={};
    for(var i = 0; i < input.length; i++){
      if(!output[input[i]])
        output[input[i]] = 1;
      else
        output[input[i]]++;
    }
  return output;
}

console.log(countLetters("Lighthouse in the house"));