function countLetters(sentence){
  var output={};
  for(var i = 0; i < sentence.length; i++){
    if (sentence[i] != ' ') {
      if(!output[sentence[i]])
        output[sentence[i]] = [i];
      else
        output[sentence[i]].push(i);
    }
  }
  return output;
}

console.log(countLetters("Lighthouse in the house"));