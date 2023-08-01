// Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. 
// A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// EXAMPLE(S)
// ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16

// returns
// ["the  quick brown", // (2 spaces, 1 space)
// "fox  jumps  over", // (2 spaces, 2 spaces)
// "the lazy dog    "]  // (left justify, fill the end with 4 spaces)

// count the total number of characters + 1 space per word - 1 (the last word doesn't need a space)
  // as I count, turn into long string
// divide the total by the k (length)
  //  

function justifiedLines(arr, k){
  let tempArr = [];
  let newArr = [];
  let tempArrayLength = 0;

  function addSpaces(arr, lastLine){
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
      counter += arr[i].length
    }

    let remainingSpaces = k - counter;
    let lastString = "";
    if (lastLine || arr.length === 1){
      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1){
          lastString += arr[i]
          lastString += " ".repeat(remainingSpaces)
        } else {
          lastString += arr[i]
          lastString += " "
          remainingSpaces--
        }
      }
      return lastString
    }
    
    let baseSpaces = Math.floor((k - counter) / (arr.length - 1));
    let extraSpaces = baseSpaces + 1;
    let numberOfExtraSpaces = (k - counter) % (arr.length - 1);

    let string = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        string += arr[i]
      } else {
        if (numberOfExtraSpaces > 0) {
          string += arr[i] 
          string += " ".repeat(extraSpaces)
          numberOfExtraSpaces--
        } else {
          string += arr[i]
          string += " ".repeat(baseSpaces)
        }
      }
    }
    return string
  }

  for (let i = 0; i < arr.length; i++){
    if (tempArrayLength + arr[i].length + 1 <= k && tempArrayLength > 0){
      tempArr.push(arr[i])
      tempArrayLength += arr[i].length + 1
    } else if (tempArrayLength === 0) {
      tempArr.push(arr[i])
      tempArrayLength += arr[i].length
    } else {
      newArr.push(addSpaces(tempArr, false))
      tempArr = [arr[i]]
      tempArrayLength = arr[i].length;
    }
  }

  newArr.push(addSpaces(tempArr, true))
  return newArr
};



console.log(justifiedLines(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16))
console.log(justifiedLines(["the", "quick", "brown", "fox", "jumps", "over"], 10))
console.log(justifiedLines(["the", "woman", "and", "man", "went", "flying"], 7))