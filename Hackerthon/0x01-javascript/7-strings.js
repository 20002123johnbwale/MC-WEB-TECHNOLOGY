function countWords(sentence) {
    let words = sentence.split(" ");
    return words.length;
  }
  
  let sentence = "This is a sample sentence.";
  console.log(countWords(sentence)); // Output: 5