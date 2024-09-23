/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length ==  str2.length){
    let str1Arr = str1.toLowerCase().split('').sort().join();
    let str2Arr = str2.toLowerCase().split('').sort().join();



    if(str1Arr == str2Arr)
    {
      console.log(str1Arr , " ", str2Arr )
      return true;
    }
    else{
 
      return false;
    }
    

  }  else{
    return false;
  }
  

}

module.exports = isAnagram;

// console.log(isAnagram("rail safety", "fairy tales"))



// function isAnagram(str1, str2) {
//   if (str1.length == str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//       let letter = str1[i];
//       for (let j = 0; j < str2.length; j++) {

//         if (letter == str2[j]) {
//           console.log("Matched")
//           str1[i] = -1;   string are immutable in js therefoer cant do this
//           str2[j] = -1;
//         } 
//         console.log(`str1 : ${str1} , str2 : ${str2}`)
//       }
//     }
//   } else {
//     return false;
//   }

//   if (str1 == str2) {




//     return true;
//   }
// }

// console.log(isAnagram("jik","kis"));
